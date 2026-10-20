/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be served from Firebase Hosting (see firebase.json)
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
