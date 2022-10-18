/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "pbs.twimg.com"
    ]
  }
}

module.exports = nextConfig
