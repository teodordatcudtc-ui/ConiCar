/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export, but images should be pre-optimized
    formats: ['image/webp', 'image/avif'],
  },
  trailingSlash: true,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig

