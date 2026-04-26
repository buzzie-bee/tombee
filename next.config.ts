import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  serverExternalPackages: ['sharp', 'mermaid-isomorphic', 'playwright', 'playwright-core'],
};

export default nextConfig;
