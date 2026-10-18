/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // YouTube thumbnails for the click-to-play interview posters on /stories.
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
  // No redirects. The Impact page lives at /impact; /reporting (its address
  // from September to October 2026) serves the same page rather than
  // redirecting. app/reporting/page.tsx explains why.
};

export default nextConfig;
