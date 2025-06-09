/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  // Update this to match your GitHub repository name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/My_Portfolio/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/My_Portfolio' : '',
}

export default nextConfig
