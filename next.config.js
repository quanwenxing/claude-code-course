/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/claude-code-course' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/claude-code-course' : '',
}

module.exports = nextConfig