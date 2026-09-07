// Row types for the `blog_posts` table written by the SEO-GLOBAL engine
// (see C:\SEO-GLOBAL\sql\blog_schema.sql). Only the columns the public site
// reads are modelled here; the anon role can only see published rows.

export interface BlogFaqItem {
  q: string;
  a: string;
}

export interface BlogSource {
  title: string;
  url: string;
}

export interface BlogInternalLink {
  href: string;
  anchor: string;
}

export type BlogPostStatus = "draft" | "published" | "archived";

/** Full row as selected for the article page. */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  meta_description: string;
  excerpt: string;
  body_html: string;
  pillar: string;
  category_label: string;
  tags: string[];
  faq: BlogFaqItem[];
  key_takeaways: string[];
  sources: BlogSource[];
  internal_links: BlogInternalLink[];
  word_count: number;
  reading_minutes: number;
  status: BlogPostStatus;
  published_at: string;
  updated_at: string;
}

/** Subset used by index / category / related-post cards. */
export interface BlogPostCard {
  slug: string;
  title: string;
  excerpt: string;
  pillar: string;
  category_label: string;
  tags: string[];
  reading_minutes: number;
  published_at: string;
  updated_at: string;
}

/** Subset used by the blog sitemap chunks. */
export interface BlogPostSitemapRow {
  slug: string;
  updated_at: string;
}

export interface PostListResult {
  posts: BlogPostCard[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
