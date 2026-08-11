/** @type {import('next').NextConfig} */
const nextConfig = {
  // Served standalone at http://localhost:3002 (root), not behind a gateway,
  // so no basePath is needed here. Previously this was "/aurevia-black" for
  // a unified-gateway setup; re-add it if this app is ever mounted under a
  // reverse proxy path again.
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
