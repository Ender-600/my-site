import type { MetadataRoute } from "next";
import { profile } from "@/lib/resume";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${profile.website}/sitemap.xml`,
  };
}
