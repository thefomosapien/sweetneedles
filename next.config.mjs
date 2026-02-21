/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow external images (e.g., Instagram CDN in Phase 2)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "**.fbcdn.net",
      },
    ],
    // Serve missing images gracefully in development
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Allow the SVG logo to be imported as an image
  webpack(config) {
    return config;
  },
};

export default nextConfig;
