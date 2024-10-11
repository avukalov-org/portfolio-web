# Stage 1: Base image
FROM node:18-alpine AS base

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