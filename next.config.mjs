/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'My_Portfolio';

const nextConfig = {
  ...(isProd && {
    // output: 'export', // Removed to allow server-side rendering
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.github.io',
      },
    ],
  },
}

export default nextConfig
