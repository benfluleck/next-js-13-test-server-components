/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['rickandmortyapi.com'],
  },
  swcMinify: true,
  experimental: {
    appDir: true,
    enableUndici: true
  }
}

module.exports = nextConfig
