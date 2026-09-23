/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // YouTube thumbnails for the click-to-play interview posters on /stories.
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
  async redirects() {
    return [
      // The page was called Impact; links to the old address keep working.
      { source: "/impact", destination: "/reporting", permanent: true },
    ];
  },
};

export default nextConfig;
