/** @type {import('next').NextConfig} */
const { withEnvy } = require('@envyjs/nextjs')

const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['@myshop/ui', '@myshop/common', '@myshop/core'],
}

const envyConfig = {
  serviceName: 'myshop-app',
}
module.exports = withEnvy(nextConfig, envyConfig)
