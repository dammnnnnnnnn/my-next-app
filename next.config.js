/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['adamroslan.netlify.app'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 