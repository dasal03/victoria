import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Provisional stock photography (Unsplash, free licence) until the client supplies its own photos.
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
};

export default nextConfig;
