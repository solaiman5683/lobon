

/** @type {import('next').NextConfig} */
const nextConfig = {
  // othor next config here...
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.geojson$/,
      type: 'json', // Treat .geojson as JSON
    });
    return config;
  },
  experimental: {
    turbo: {
      rules: {
        '*.geojson': {
          loaders: [], // No transformation needed, just load as JSON
          as: '*.json', // Treat as JSON
        },
      },
    },
  },
};

export default nextConfig;
