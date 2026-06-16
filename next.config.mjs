/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Placeholder photos are CSS gradients for now; real <Image> sources drop in later.
    remotePatterns: [],
  },
};

export default nextConfig;
