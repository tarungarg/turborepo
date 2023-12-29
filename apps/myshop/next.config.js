/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    transpilePackages: ['@myshop/ui', "@myshop/common", "@myshop/core"]
}

module.exports = nextConfig
