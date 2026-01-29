/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // PWA configuration
  experimental: {
    appDir: true,
  },
  // Production optimizations for Hostinger
  output: 'standalone',
  // Disable image optimization if needed (Hostinger may not support it)
  images: {
    unoptimized: false,
  },
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig

