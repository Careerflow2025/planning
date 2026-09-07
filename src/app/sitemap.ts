import type { MetadataRoute } from "next";
import { getAllReportSlugs } from "@/data/report-seo";
import { BLOG_CATEGORIES } from "@/lib/blog/categories";
import { categoryCounts } from "@/lib/blog/queries";
import { absoluteUrl, categoryPath } from "@/lib/blog/seo";

// Static routes + the 66 planning-document guides + blog hub and category
// pages. Individual articles live in /blog/sitemap/<n>.xml (see
// src/app/blog/sitemap.ts) and both are listed in /sitemap-index.xml.
export const revalidate = 600;

const STATIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/planning-documents", changeFrequency: "weekly", priority: 0.9 },
  { path: "/planning-law", changeFrequency: "weekly", priority: 0.6 },
  { path: "/reports", changeFrequency: "monthly", priority: 0.6 },
  { path: "/professionals", changeFrequency: "monthly", priority: 0.5 },
  { path: "/blog", changeFrequency: "daily", priority: 0.9 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const seen = new Set<string>();
  for (const slug of getAllReportSlugs()) {
    if (seen.has(slug)) continue;
    seen.add(slug);
    entries.push({
      url: absoluteUrl(`/planning-documents/${slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  const counts = await categoryCounts();
  for (const category of BLOG_CATEGORIES) {
    if ((counts[category.slug] ?? 0) === 0) continue;
    entries.push({
      url: absoluteUrl(categoryPath(category.slug)),
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.7,
    });
  }

  return entries;
}
