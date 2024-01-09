/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['@myshop/ui', '@myshop/common', '@myshop/core', '@myshop/product'],
}

module.exports = nextConfig
