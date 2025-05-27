# How I deployed my portfolio

I will show and explain how I deployed my NextJS portfolio as well as other projects and prototypes. For the server setup, I use a Raspberry Pi 5 and Dynu (a Dynamic DNS service) configured at my home.

If you have any questions, feel free to [contact me](https://avukalov.com/contact).

Let's get started! 😄

## Table of content

1. [Preparation](#preparation)
2. [Creating Docker image](#creating-docker-image)
3. [Building Docker image using self-hosted builder and Github actions](#building-docker-image)
4. [Nginx configuration](#nginx-configuration)
5. [Https Certificate](#https-certificate)
6. [Docker Compose file](#docker-compose-file)
7. [Firewall](#firewall)



<div id="preparation" />

## Preparation

First and foremost, we need a server. I use a Raspberry Pi 5, but you can use your PC or laptop — it doesn’t matter. Then, we need to expose our server to the internet, which can be done using DDNS (Dynamic DNS) (for free). Another method is to buy a cheap VPS (Virtual Private Server). If you’re not interested in exposing your work to the internet but just want to test things out locally, it works as well.


All we need is Docker. Install Docker on your machine depends on your operating system. You can install it on Windows, macOS, or Linux by following the official [installation guide](https://docs.docker.com/desktop/). Once that’s done, we’re ready to go.

<div id='creating-docker-image'/>

## Creating Docker image

To run our app on Docker, we need to create docker image. First, create a new file called `Dockerfile` (without any extension, just _Dockerfile_).

```dockerfile
# Stage 1: Base image
FROM node:23-alpine3.20 AS base

# Install libc6-compat for compatibility if needed
RUN apk add --no-cache libc6-compat

WORKDIR /app


# Stage 2: Install dependencies based on the preferred package manager
FROM base AS deps

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Conditional installation of dependencies based on the lockfile present
RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm install; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Stage 3: Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

# Copy dependencies from the previous stage
COPY --from=deps /app/node_modules ./node_modules

# Copy application source code
COPY . .

ARG NEXT_HYGRAPH_ENDPOINT_ARG
ENV NEXT_HYGRAPH_ENDPOINT=$NEXT_HYGRAPH_ENDPOINT_ARG

# Build the application
RUN npm run build

# Stage 2: Run
FROM base AS runner

WORKDIR /app

COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3001

CMD ["node", "server.js"]
```

I'm using `output: "standalone"` to minimize image size. It can be configured in `next.config.mjs`.

```js filename="next.config.mjs"
const nextConfig = {
  output: 'standalone',
};

export default nextConfig;
```

```dockerfile
ARG NEXT_HYGRAPH_ENDPOINT_ARG
ENV NEXT_HYGRAPH_ENDPOINT=$NEXT_HYGRAPH_ENDPOINT_ARG
```

This is an environment variable I used for a headless CMS service. If you have private environment variables (for example, API keys) in your app, make sure to protect them.

<div id='building-docker-image'/>

## Building Docker image using self-hosted builder and Github actions

Now it’s time to build and push the Docker image to Docker Hub. If you don’t have an account on Docker Hub, you can create one for free.

We need to create a GitHub Action that will automate the process for us. I’m using a self-hosted runner, but you can use GitHub’s built-in runner. It’s free, but be sure to check the free tier limits!

In the root folder of your project, create the folders `.github/workflows`, then create a new file called `docker-image-build.yml`.

```yml
name: Docker Image CI

on:
  push:
    branches: ['master']

jobs:
  build:
    runs-on: [self-hosted, arm64]

    steps:
      # Checkout the code from the repository
      - uses: actions/checkout@v4

      - name: Log in to Docker Hub
        run: echo "${{ secrets.DOCKERHUB_TOKEN }}" | docker login -u "${{ secrets.DOCKERHUB_USER }}" --password-stdin

      - name: Build and tag the Docker image
        run: |
          docker build . \
            --no-cache \
            --file Dockerfile \
            --tag avukalov/portfolio-web:latest \
            --build-arg NEXT_HYGRAPH_ENDPOINT_ARG=${{ secrets.NEXT_HYGRAPH_ENDPOINT }} \

      - name: Push the Docker image
        run: |
          docker push avukalov/portfolio-web:latest
```

For the built-in GitHub runner, use `runs-on: ubuntu-latest` instead of `runs-on: [self-hosted, arm64]`. I’m using a Raspberry Pi, which uses the ARM architecture, so the image needs to be built on the correct architecture.

If you have secrets or private environment variables such as API keys, go to your GitHub repository **Settings** then in the left sidebar navigate to **Secrets and variables**, and then **Actions**. Set your secrets and API keys there.

I’ve configured the action to be triggered on every push to the `master` branch. 

```yml
on:
  push:
    branches: ['master']
```

<div id='nginx-configuration'/>

## Nginx configuration

The next step is to configure Nginx.

Nginx is a high-performance web server, reverse proxy, and load balancer. Originally developed to handle high concurrency with low resource usage, Nginx is now widely used to serve static content, manage API traffic, and distribute load across multiple backend servers. It is a popular choice for modern web applications and microservices architectures.

Here is an example of how to configure Nginx as a reverse proxy.

```bash
worker_processes auto;  # Automatically set the number of worker processes
events {
    worker_connections 1024;  # Each worker can handle 1024 connections
}

http {

    # PORTFOLIO
    upstream portfolio {
        server portfolio:3000;  # Change this to your app's container name and port
                                # Default port for NextJs app is 3000
    }

    server {
        listen 80;
        server_name portfolio.com www.portfolio.com;  # Change to your domain/subdomain
                                                      # Use localhost for local testing

        # Redirect all HTTP traffic to HTTPS
        return 301 https://$host$request_uri; # Redirecting traffic to https
    }

    #
    server {
        listen 443 ssl;
        server_name portfolio.com www.portfolio.com;

        ssl_certificate /etc/nginx/portfolio.com/ssl/fullchain.pem;
        ssl_certificate_key /etc/nginx/portfolio.com/ssl/privkey.pem;
        include /etc/nginx/options-ssl-nginx.conf;
        ssl_dhparam /etc/nginx/ssl-dhparams.pem;

        location / {
            proxy_pass http://portfolio;  # Use the upstream defined for portfolio
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}
```

For more in-depth instructions on how to configure Nginx, refer to the official [documentation](https://docs.nginx.com/nginx/admin-guide/basic-functionality/managing-configuration-files/).

Ubuntu Server usually comes with Nginx or Apache preinstalled. In order to use the Nginx Docker container on port 80, we need to disable the Nginx service running on the host Linux machine.

```bash
sudo systemctl stop nginx.service
```

and then

```bash
sudo systemctl disable nginx.service
```

<div id='https-certificate'/>

## SSL Certificate

In order to use the HTTPS protocol, we need an SSL certificate. We can obtain one for free from the [Let's Encrypt](https://letsencrypt.org/getting-started/) certificate authority using Certbot. To install certbot follow [these](https://certbot.eff.org/instructions) instructions.

Here is an example of how to do it on a Linux system (Ubuntu):

For automatic Nginx configuration:

```bash
sudo certbot --nginx -d example.com -d www.example.com
```

This command will automatically configure the Nginx configuration file for you.  
If you previously disabled the `nginx.service` on your machine, this command will likely enable it again, causing port 80 to become unavailable.  
However, we can issue the certificate first and then manually configure the paths in the Nginx configuration file.

For manual certificate only (no auto-Nginx config):

```bash
sudo certbot certonly -d example.com -d www.example.com
```

<div id='docker-compose-file'/>

## Docker Compose file

Docker Compose is a tool that allows you to define and manage multi-container Docker applications using a simple YAML configuration file (`docker-compose.yml`). Instead of manually starting each container with `docker run` commands, Compose lets you define services, networks, and volumes in one place and start everything with a single command. It is ideal for development, testing, and deploying applications that consist of multiple interconnected components such as web servers, databases, and caches.

Here is an example of `docker-compose.yml` file:

```yaml
services:
  nginx:
    image: nginx:latest
    container_name: nginx_proxy
    restart: always
    ports:
      - '80:80'
      - '443:443'
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf

      - /etc/letsencrypt/options-ssl-nginx.conf:/etc/nginx/options-ssl-nginx.conf
      - /etc/letsencrypt/ssl-dhparams.pem:/etc/nginx/ssl-dhparams.pem

      - /etc/letsencrypt/live/portfolio.com/fullchain.pem:/etc/nginx/portfolio.com/ssl/fullchain.pem
      - /etc/letsencrypt/live/portfolio.com/privkey.pem:/etc/nginx/portfolio.com/ssl/privkey.pem
    networks:
      - webnet

  portfolio:
    hostname: portfolio
    container_name: portfolio
    image: avukalov/portfolio-web:latest #<dockerhub-repository-name>/<image:tag>
    restart: always
    env_file:
      - ./portfolio/web/.env
    ports:
      - '3000:3000'
    networks:
      - webnet

networks:
  webnet:
    driver: bridge
```

Before running our containers, we need to create volume storage.

For example, we can structure our production settings as follows:

```
production-settings
├── docker-compose.yml
├── nginx
│   └── nginx.conf
└── portfolio
    └── web
        └── .env
```

To mount a volume for our `nginx.conf` file, we simply add the following line:

```yml
nginx:
    ...
    volumes:
        - ./nginx/nginx.conf:/etc/nginx/nginx.conf
```

The first part is the path on our local machine, and the second part is the path where the file will be stored inside the container.

We need to do the same for our SSL certificates.

```yml
nginx:
    ...
    volumes:
        ...
        - /etc/letsencrypt/live/portfolio.com/fullchain.pem:/etc/nginx/portfolio.com/ssl/fullchain.pem
        - /etc/letsencrypt/live/portfolio.com/privkey.pem:/etc/nginx/portfolio.com/ssl/privkey.pem
```

The path `/etc/letsencrypt/live/<domain-name>` is where Certbot saves the `fulchain.pem` and `privkey.pem` files by default.

The paths in `nginx.conf` must match the right-hand side of the volume mappings, as they represent locations inside the container.

```bash
ssl_certificate /etc/nginx/portfolio.com/ssl/fullchain.pem;
ssl_certificate_key /etc/nginx/portfolio.com/ssl/privkey.pem;
```

Finally, to run our docker container we can simply execute following command:

```bash
docker compose up -d
```

If everything is done correctly, we should be able to navigate to `https://portfolio.com` or `https://localhost`.

<div id="firewall" />

## Firewall

Of course, we need to allow inbound traffic on ports 80 and 443.

First, check the status of the firewall:

```bash
sudo ufw status
```

If firewall is not enabled, enable it with the following command:

```bash
sudo ufw enable
```

Then, allow traffic on ports 80 (HTTP) and 443 (HTTPS):

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

Finally, verify the status after applying the changes:

```bash
sudo ufw status
```

We are done! We successfully deployed our portfolio app on the server using Docker.  
Docker images are built and pushed automatically via GitHub Actions, Nginx is configured as a reverse proxy with HTTPS support, and the firewall is set up to allow web traffic on ports 80 and 443. Everything is containerized, secure, and ready for production.

If you have any questions or would like to offer suggestions for improvement, feel free to [contact me](https://avukalov.com/contact).  

I’m always happy to help! 😄
