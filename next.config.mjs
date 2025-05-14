/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eu-west-2.graphassets.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)', // primijeni na sve rute
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'upgrade-insecure-requests',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
