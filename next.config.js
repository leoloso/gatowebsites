const { withContentlayer } = require('next-contentlayer')
const { withPlausibleProxy } = require('next-plausible')

/** @type {import('next').NextConfig} */
const nextConfig = {}

// Proxy the Plausible Analytics script
// @see https://github.com/4lejandrito/next-plausible?tab=readme-ov-file#proxy-the-analytics-script
module.exports = withPlausibleProxy({
  subdirectory: 'masked-source',
})(withContentlayer(nextConfig))