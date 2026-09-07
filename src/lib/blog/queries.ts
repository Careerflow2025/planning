import { getBlogClient } from "./client";
import { BLOG_CATEGORIES } from "./categories";
import type {
  BlogFaqItem,
  BlogInternalLink,
  BlogPost,
  BlogPostCard,
  BlogPostSitemapRow,
  BlogSource,
  PostListResult,
} from "./types";

export const POSTS_PER_PAGE = 24;
export const SITEMAP_CHUNK_SIZE = 5000;
/** PostgREST caps a single response at 1,000 rows on Supabase by default. */
const PAGE_FETCH_LIMIT = 1000;

const CARD_COLUMNS =
  "slug,title,excerpt,pillar,category_label,tags,reading_minutes,published_at,updated_at";
const POST_COLUMNS =
  "id,slug,title,meta_description,excerpt,body_html,pillar,category_label,tags,faq,key_takeaways,sources,internal_links,word_count,reading_minutes,status,published_at,updated_at";

// ---------------------------------------------------------------------------
// Error handling: the blog table may not exist yet (schema applied later) and
// Supabase env may be absent at build time. Every query degrades to an empty
// result and logs once per distinct message instead of throwing.
// ---------------------------------------------------------------------------

const loggedErrors = new Set<string>();

function reportError(where: string, error: unknown): void {
  const message =
    error && typeof error === "object" && "message" in error
      ? String((error as { message: unknown }).message)
      : String(error);
  const key = `${where}:${message}`;
  if (loggedErrors.has(key)) return;
  loggedErrors.add(key);
  console.warn(`[blog] ${where} failed: ${message}`);
}

function nowIso(): string {
  return new Date().toISOString();
}

// ---------------------------------------------------------------------------
// Normalisers — the engine stores jsonb; be defensive about shape so a single
// malformed row can never crash a page.
// ---------------------------------------------------------------------------

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((v) => (typeof v === "string" ? v.trim() : ""))
    .filter((v) => v.length > 0);
}

function asFaq(value: unknown): BlogFaqItem[] {
  if (!Array.isArray(value)) return [];
  const out: BlogFaqItem[] = [];
  for (const item of value) {
    if (!item || typeof item !== "object") continue;
    const rec = item as Record<string, unknown>;
    const q = typeof rec.q === "string" ? rec.q : typeof rec.question === "string" ? rec.question : "";
    const a = typeof rec.a === "string" ? rec.a : typeof rec.answer === "string" ? rec.answer : "";
    if (q.trim() && a.trim()) out.push({ q: q.trim(), a: a.trim() });
  }
  return out;
}

function asSources(value: unknown): BlogSource[] {
  if (!Array.isArray(value)) return [];
  const out: BlogSource[] = [];
  for (const item of value) {
    if (!item || typeof item !== "object") continue;
    const rec = item as Record<string, unknown>;
    const url = typeof rec.url === "string" ? rec.url.trim() : "";
    if (!/^https?:\/\//i.test(url)) continue;
    const title = typeof rec.title === "string" && rec.title.trim() ? rec.title.trim() : url;
    out.push({ title, url });
  }
  return out;
}

function asInternalLinks(value: unknown): BlogInternalLink[] {
  if (!Array.isArray(value)) return [];
  const out: BlogInternalLink[] = [];
  for (const item of value) {
    if (!item || typeof item !== "object") continue;
    const rec = item as Record<string, unknown>;
    const href = typeof rec.href === "string" ? rec.href.trim() : "";
    const anchor = typeof rec.anchor === "string" ? rec.anchor.trim() : "";
    if (href.startsWith("/") && anchor) out.push({ href, anchor });
  }
  return out;
}

function toCard(row: Record<string, unknown>): BlogPostCard {
  return {
    slug: String(row.slug ?? ""),
    title: String(row.title ?? ""),
    excerpt: String(row.excerpt ?? ""),
    pillar: String(row.pillar ?? ""),
    category_label: String(row.category_label ?? ""),
    tags: asStringArray(row.tags),
    reading_minutes: Number(row.reading_minutes ?? 0) || 0,
    published_at: String(row.published_at ?? nowIso()),
    updated_at: String(row.updated_at ?? row.published_at ?? nowIso()),
  };
}

function toPost(row: Record<string, unknown>): BlogPost {
  const card = toCard(row);
  return {
    ...card,
    id: String(row.id ?? ""),
    meta_description: String(row.meta_description ?? ""),
    body_html: String(row.body_html ?? ""),
    faq: asFaq(row.faq),
    key_takeaways: asStringArray(row.key_takeaways),
    sources: asSources(row.sources),
    internal_links: asInternalLinks(row.internal_links),
    word_count: Number(row.word_count ?? 0) || 0,
    status: (row.status === "draft" || row.status === "archived" ? row.status : "published"),
  };
}

// ---------------------------------------------------------------------------
// Queries
// ---------------------------------------------------------------------------

export interface ListPostsOptions {
  page?: number;
  pageSize?: number;
  /** Pillar slug (see categories.ts). */
  category?: string;
}

/** Paginated list of published posts, newest first. */
export async function listPosts(options: ListPostsOptions = {}): Promise<PostListResult> {
  const pageSize = Math.max(1, Math.min(options.pageSize ?? POSTS_PER_PAGE, PAGE_FETCH_LIMIT));
  const page = Math.max(1, Math.floor(options.page ?? 1));
  const empty: PostListResult = { posts: [], total: 0, page, pageSize, totalPages: 0 };

  const client = getBlogClient();
  if (!client) return empty;

  try {
    let query = client
      .from("blog_posts")
      .select(CARD_COLUMNS, { count: "exact" })
      .eq("status", "published")
      .lte("published_at", nowIso());
    if (options.category) query = query.eq("pillar", options.category);

    const from = (page - 1) * pageSize;
    const { data, error, count } = await query
      .order("published_at", { ascending: false })
      .order("id", { ascending: true })
      .range(from, from + pageSize - 1);

    if (error) {
      reportError("listPosts", error);
      return empty;
    }
    const total = count ?? 0;
    return {
      posts: (data ?? []).map((row) => toCard(row as Record<string, unknown>)),
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    };
  } catch (err) {
    reportError("listPosts", err);
    return empty;
  }
}

/** One published post by slug, or null. */
export async function getPost(slug: string): Promise<BlogPost | null> {
  const client = getBlogClient();
  if (!client || !slug) return null;

  try {
    const { data, error } = await client
      .from("blog_posts")
      .select(POST_COLUMNS)
      .eq("slug", slug)
      .eq("status", "published")
      .lte("published_at", nowIso())
      .maybeSingle();

    if (error) {
      reportError("getPost", error);
      return null;
    }
    return data ? toPost(data as Record<string, unknown>) : null;
  } catch (err) {
    reportError("getPost", err);
    return null;
  }
}

/** Up to `limit` other published posts in the same pillar, newest first. */
export async function listRelated(
  pillar: string,
  excludeSlug: string,
  limit = 6
): Promise<BlogPostCard[]> {
  const client = getBlogClient();
  if (!client || !pillar) return [];

  try {
    const { data, error } = await client
      .from("blog_posts")
      .select(CARD_COLUMNS)
      .eq("status", "published")
      .lte("published_at", nowIso())
      .eq("pillar", pillar)
      .neq("slug", excludeSlug)
      .order("published_at", { ascending: false })
      .limit(Math.max(1, limit));

    if (error) {
      reportError("listRelated", error);
      return [];
    }
    return (data ?? []).map((row) => toCard(row as Record<string, unknown>));
  } catch (err) {
    reportError("listRelated", err);
    return [];
  }
}

/** Number of published posts (optionally within one pillar). */
export async function countPosts(category?: string): Promise<number> {
  const client = getBlogClient();
  if (!client) return 0;

  try {
    let query = client
      .from("blog_posts")
      .select("id", { count: "exact", head: true })
      .eq("status", "published")
      .lte("published_at", nowIso());
    if (category) query = query.eq("pillar", category);

    const { error, count } = await query;
    if (error) {
      reportError("countPosts", error);
      return 0;
    }
    return count ?? 0;
  } catch (err) {
    reportError("countPosts", err);
    return 0;
  }
}

/**
 * Slugs + updated_at for sitemap chunk `chunk` (0-based), `size` rows each,
 * in a stable order (oldest first) so a post never moves between chunks as new
 * ones are published. Fetches in 1,000-row pages to respect PostgREST limits.
 */
export async function listSlugsChunk(
  chunk: number,
  size = SITEMAP_CHUNK_SIZE
): Promise<BlogPostSitemapRow[]> {
  const client = getBlogClient();
  if (!client || !Number.isFinite(chunk) || chunk < 0) return [];

  const chunkStart = Math.floor(chunk) * size;
  const chunkEnd = chunkStart + size; // exclusive
  const rows: BlogPostSitemapRow[] = [];

  try {
    for (let from = chunkStart; from < chunkEnd; from += PAGE_FETCH_LIMIT) {
      const to = Math.min(from + PAGE_FETCH_LIMIT, chunkEnd) - 1;
      const { data, error } = await client
        .from("blog_posts")
        .select("slug,updated_at,published_at")
        .eq("status", "published")
        .lte("published_at", nowIso())
        .order("published_at", { ascending: true })
        .order("id", { ascending: true })
        .range(from, to);

      if (error) {
        reportError("listSlugsChunk", error);
        break;
      }
      const batch = (data ?? []) as Array<Record<string, unknown>>;
      for (const row of batch) {
        const slug = String(row.slug ?? "");
        if (!slug) continue;
        rows.push({
          slug,
          updated_at: String(row.updated_at ?? row.published_at ?? nowIso()),
        });
      }
      if (batch.length < to - from + 1) break; // last page
    }
  } catch (err) {
    reportError("listSlugsChunk", err);
  }
  return rows;
}

/** Published post count per category slug (every category present, zero when empty). */
export async function categoryCounts(): Promise<Record<string, number>> {
  const counts: Record<string, number> = {};
  for (const category of BLOG_CATEGORIES) counts[category.slug] = 0;

  const client = getBlogClient();
  if (!client) return counts;

  const results = await Promise.all(
    BLOG_CATEGORIES.map(async (category) => ({
      slug: category.slug,
      count: await countPosts(category.slug),
    }))
  );
  for (const result of results) counts[result.slug] = result.count;
  return counts;
}
