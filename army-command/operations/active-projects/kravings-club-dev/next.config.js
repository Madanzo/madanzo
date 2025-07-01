/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  env: {
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
    WP_USERNAME: process.env.WP_USERNAME,
    WP_APP_PASSWORD: process.env.WP_APP_PASSWORD,
  }
}

module.exports = nextConfig