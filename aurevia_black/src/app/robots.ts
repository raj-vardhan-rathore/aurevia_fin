import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://aureviastudio.uk/sitemap.xml",
    host: "https://aureviastudio.uk",
  };
}
