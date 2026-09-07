import type { BlogFaqItem, BlogPost } from "./types";

// Brand facts used by the blog chrome and structured data. Keep in step with
// blog_settings (author_name / publisher_name) in the SEO-GLOBAL engine.
export const SITE_NAME = "PlanScope";
export const AUTHOR_NAME = "PlanScope Editorial Team";
export const PUBLISHER_NAME = "PlanScope";
export const BLOG_PATH = "/blog";
export const BLOG_TITLE = "PlanScope Blog";
export const BLOG_DESCRIPTION =
  "Practical guides to UK planning applications: which reports your council expects, permitted development, constraints, costs, appeals and how to prepare each document.";

function resolveSiteUrl(): string {
  const raw = (process.env.NEXT_PUBLIC_APP_URL ?? "").trim();
  const candidate = raw || "https://planninglabs.co.uk";
  try {
    const url = new URL(candidate);
    return url.origin;
  } catch {
    return "https://planninglabs.co.uk";
  }
}

export const SITE_URL = resolveSiteUrl();

/** Absolute URL for a site-relative path (or passes absolute URLs through). */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}

export function postPath(slug: string): string {
  return `${BLOG_PATH}/${slug}`;
}

export function postUrl(slug: string): string {
  return absoluteUrl(postPath(slug));
}

export function categoryPath(category: string, page = 1): string {
  const base = `${BLOG_PATH}/category/${category}`;
  return page > 1 ? `${base}?page=${page}` : base;
}

export function categoryUrl(category: string, page = 1): string {
  return absoluteUrl(categoryPath(category, page));
}

export function blogIndexPath(page = 1): string {
  return page > 1 ? `${BLOG_PATH}?page=${page}` : BLOG_PATH;
}

export function blogIndexUrl(page = 1): string {
  return absoluteUrl(blogIndexPath(page));
}

const GB_DATE = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Europe/London",
});

/** "7 September 2026" style date; falls back to the raw string if unparseable. */
export function formatDateGb(iso: string): string {
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? iso : GB_DATE.format(date);
}

export function toIsoDate(iso: string): string {
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? iso : date.toISOString();
}

/** Strip HTML tags for plain-text contexts (FAQ answers may contain simple markup). */
export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

// Unicode LINE SEPARATOR / PARAGRAPH SEPARATOR are valid in JSON but are
// line terminators in JavaScript, so they must be escaped inside a script tag.
// Built from code points so the source file never contains the raw characters.
const LINE_SEPARATOR = new RegExp(String.fromCharCode(0x2028), "g");
const PARAGRAPH_SEPARATOR = new RegExp(String.fromCharCode(0x2029), "g");
const BACKSLASH = String.fromCharCode(0x5c);

/**
 * Serialise JSON-LD for a <script type="application/ld+json"> body. Escapes
 * characters that could terminate the script element or be interpreted as
 * HTML, so untrusted strings from the database are safe to embed.
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, `${BACKSLASH}u003c`)
    .replace(/>/g, `${BACKSLASH}u003e`)
    .replace(/&/g, `${BACKSLASH}u0026`)
    .replace(LINE_SEPARATOR, `${BACKSLASH}u2028`)
    .replace(PARAGRAPH_SEPARATOR, `${BACKSLASH}u2029`);
}

// ---------------------------------------------------------------------------
// JSON-LD builders
// ---------------------------------------------------------------------------

export interface BreadcrumbItem {
  name: string;
  /** Site-relative path or absolute URL. */
  href: string;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqPageJsonLd(faq: BlogFaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: stripHtml(item.q),
      acceptedAnswer: {
        "@type": "Answer",
        text: stripHtml(item.a),
      },
    })),
  };
}

export function blogPostingJsonLd(post: BlogPost, categoryLabel: string): Record<string, unknown> {
  const url = postUrl(post.slug);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    headline: post.title,
    description: post.meta_description,
    abstract: post.excerpt,
    articleSection: categoryLabel,
    keywords: post.tags.join(", "),
    wordCount: post.word_count,
    inLanguage: "en-GB",
    isAccessibleForFree: true,
    datePublished: toIsoDate(post.published_at),
    dateModified: toIsoDate(post.updated_at),
    author: {
      "@type": "Organization",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: PUBLISHER_NAME,
      url: SITE_URL,
    },
    isPartOf: {
      "@type": "Blog",
      "@id": `${absoluteUrl(BLOG_PATH)}#blog`,
      name: BLOG_TITLE,
      url: absoluteUrl(BLOG_PATH),
    },
  };
}

export function blogJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${absoluteUrl(BLOG_PATH)}#blog`,
    name: BLOG_TITLE,
    url: absoluteUrl(BLOG_PATH),
    description: BLOG_DESCRIPTION,
    inLanguage: "en-GB",
    publisher: {
      "@type": "Organization",
      name: PUBLISHER_NAME,
      url: SITE_URL,
    },
  };
}
