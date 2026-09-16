/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  ...(isGithubPages
    ? {
        output: "export",
        trailingSlash: true,
        basePath: "/mhamane",
        images: { unoptimized: true },
      }
    : {
        images: {
          remotePatterns: [
            {
              protocol: "https",
              hostname: "images.unsplash.com",
            },
          ],
        },
      }),
};

module.exports = nextConfig;
