/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Production optimizations for Hostinger
  output: 'standalone',
  // Image optimization
  images: {
    unoptimized: false,
  },
}

module.exports = nextConfig

