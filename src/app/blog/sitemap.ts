import type { MetadataRoute } from "next";
import { countPosts, listSlugsChunk, SITEMAP_CHUNK_SIZE } from "@/lib/blog/queries";
import { postUrl } from "@/lib/blog/seo";

// Served at /blog/sitemap/<id>.xml. Next re-runs generateSitemaps() on each
// request, so new chunks appear as the post count grows; `revalidate` keeps
// each chunk fresh without a rebuild.
export const revalidate = 600;

export async function generateSitemaps(): Promise<Array<{ id: number }>> {
  const total = await countPosts();
  const chunks = Math.max(1, Math.ceil(total / SITEMAP_CHUNK_SIZE));
  return Array.from({ length: chunks }, (_, id) => ({ id }));
}

export default async function sitemap(props: { id: Promise<string> }): Promise<MetadataRoute.Sitemap> {
  const rawId = await props.id;
  const chunk = Number.parseInt(rawId, 10);
  if (!Number.isFinite(chunk) || chunk < 0) return [];

  const rows = await listSlugsChunk(chunk, SITEMAP_CHUNK_SIZE);
  return rows.map((row) => {
    const lastModified = new Date(row.updated_at);
    return {
      url: postUrl(row.slug),
      lastModified: Number.isNaN(lastModified.getTime()) ? new Date() : lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });
}
