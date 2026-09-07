import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/blog/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/admin", "/start", "/api", "/login", "/register"],
      },
    ],
    sitemap: [absoluteUrl("/sitemap.xml"), absoluteUrl("/sitemap-index.xml")],
  };
}
