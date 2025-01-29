import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}
