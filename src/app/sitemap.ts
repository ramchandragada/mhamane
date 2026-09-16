import type { MetadataRoute } from "next";

const baseUrl = "https://mhamane.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/projects", "/contact"];
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
