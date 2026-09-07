import { countPosts, SITEMAP_CHUNK_SIZE } from "@/lib/blog/queries";
import { absoluteUrl } from "@/lib/blog/seo";

// Next's App Router cannot emit a <sitemapindex> from sitemap.ts, so this
// route handler lists the static sitemap plus every blog chunk. robots.txt
// references it alongside /sitemap.xml.
export const revalidate = 600;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(): Promise<Response> {
  const total = await countPosts();
  const chunks = Math.max(1, Math.ceil(total / SITEMAP_CHUNK_SIZE));
  const lastmod = new Date().toISOString();

  const locations = [
    absoluteUrl("/sitemap.xml"),
    ...Array.from({ length: chunks }, (_, id) => absoluteUrl(`/blog/sitemap/${id}.xml`)),
  ];

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    locations
      .map(
        (loc) =>
          `  <sitemap>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>`
      )
      .join("\n") +
    `\n</sitemapindex>\n`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=600, stale-while-revalidate=3600",
    },
  });
}
