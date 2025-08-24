// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other configs
  webpack: (config: import('webpack').Configuration) => {
    config.resolve = config.resolve || {};
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: require.resolve('crypto-browserify'),
    };
    return config;
  },
};

module.exports = nextConfig;
