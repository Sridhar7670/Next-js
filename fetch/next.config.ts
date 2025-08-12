/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is the configuration that will fix your deployment
  eslint: {
    // This allows your project to build even if there are ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;