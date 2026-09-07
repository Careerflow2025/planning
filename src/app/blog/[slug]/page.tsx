import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostCard from "@/components/blog/PostCard";
import BlogCta from "@/components/blog/BlogCta";
import JsonLd from "@/components/blog/JsonLd";
import { BLOG_CATEGORIES } from "@/lib/blog/categories";
import { getPost, listRelated } from "@/lib/blog/queries";
import {
  AUTHOR_NAME,
  blogPostingJsonLd,
  breadcrumbJsonLd,
  categoryPath,
  faqPageJsonLd,
  formatDateGb,
  postPath,
  postUrl,
  SITE_NAME,
  toIsoDate,
} from "@/lib/blog/seo";

export const revalidate = 600;
export const dynamicParams = true;

export function generateStaticParams(): Array<{ slug: string }> {
  return [];
}

type Params = Promise<{ slug: string }>;

function categoryLabelFor(pillar: string, fallback: string): string {
  return BLOG_CATEGORIES.find((category) => category.slug === pillar)?.label ?? fallback;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Article not found", robots: { index: false, follow: false } };

  const url = postUrl(post.slug);
  const categoryLabel = categoryLabelFor(post.pillar, post.category_label);
  return {
    title: post.title,
    description: post.meta_description,
    keywords: post.tags,
    authors: [{ name: AUTHOR_NAME }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      title: post.title,
      description: post.meta_description,
      publishedTime: toIsoDate(post.published_at),
      modifiedTime: toIsoDate(post.updated_at),
      section: categoryLabel,
      tags: post.tags,
      authors: [AUTHOR_NAME],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.meta_description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const related = await listRelated(post.pillar, post.slug, 6);
  const categoryLabel = categoryLabelFor(post.pillar, post.category_label);
  const categoryHref = categoryPath(post.pillar);
  const publishedIso = toIsoDate(post.published_at);
  const updatedIso = toIsoDate(post.updated_at);
  const wasUpdated = updatedIso.slice(0, 10) !== publishedIso.slice(0, 10);

  return (
    <>
      <JsonLd data={blogPostingJsonLd(post, categoryLabel)} />
      {post.faq.length > 0 && <JsonLd data={faqPageJsonLd(post.faq)} />}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: categoryLabel, href: categoryHref },
          { name: post.title, href: postPath(post.slug) },
        ])}
      />

      <article className="py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <span>/</span>
            <Link href={categoryHref} className="hover:text-foreground transition-colors">
              {categoryLabel}
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium line-clamp-1">{post.title}</span>
          </nav>

          {/* Eyebrow */}
          <Link
            href={categoryHref}
            className="inline-block text-xs font-bold text-primary bg-primary-light px-2 py-0.5 rounded mb-4 hover:bg-primary hover:text-white transition-colors"
          >
            {categoryLabel}
          </Link>

          {/* H1 */}
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">{post.title}</h1>

          {/* Meta line */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted mb-6">
            <time dateTime={publishedIso}>{formatDateGb(post.published_at)}</time>
            {wasUpdated && (
              <>
                <span aria-hidden="true">&middot;</span>
                <span>
                  Updated <time dateTime={updatedIso}>{formatDateGb(post.updated_at)}</time>
                </span>
              </>
            )}
            <span aria-hidden="true">&middot;</span>
            <span>{post.reading_minutes} min read</span>
            <span aria-hidden="true">&middot;</span>
            <span>By {AUTHOR_NAME}</span>
          </div>

          {/* Lead */}
          {post.excerpt && <p className="text-lg text-muted leading-relaxed mb-8">{post.excerpt}</p>}

          {/* Key takeaways */}
          {post.key_takeaways.length > 0 && (
            <aside className="bg-primary/5 border border-primary/10 rounded-2xl p-5 md:p-6 mb-10">
              <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Key takeaways</h2>
              <ul className="space-y-2">
                {post.key_takeaways.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-800 leading-relaxed">
                    <svg
                      className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {/* Body */}
          <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.body_html }} />

          {/* FAQ */}
          {post.faq.length > 0 && (
            <section className="mt-12 mb-10">
              <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
              <div className="space-y-4">
                {post.faq.map((item, index) => (
                  <details key={index} className="group border border-gray-200 rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-white hover:bg-gray-50 transition-colors">
                      <h3 className="text-sm font-semibold text-gray-900 pr-4">{item.q}</h3>
                      <svg
                        className="w-5 h-5 text-muted flex-shrink-0 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-4 pt-1">
                      <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Sources */}
          {post.sources.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl font-bold mb-3">Sources and further reading</h2>
              <ul className="space-y-2">
                {post.sources.map((source, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg
                      className="w-4 h-4 text-muted flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-primary hover:underline break-words"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* CTA */}
          <BlogCta variant="card" />

          <p className="text-xs text-muted leading-relaxed mb-10">
            This article is general guidance about the planning system in England and, where stated, the rest
            of the UK. It is not legal or professional advice. Check your local planning authority&rsquo;s
            validation requirements and take professional advice for your specific site.
          </p>

          {/* Back link */}
          <div className="pt-6 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              Back to all articles
            </Link>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-12 md:py-16 bg-card-bg border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="text-xl md:text-2xl font-bold">More in {categoryLabel}</h2>
              <Link href={categoryHref} className="text-sm font-semibold text-primary hover:underline whitespace-nowrap">
                View all &rarr;
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((item) => (
                <PostCard key={item.slug} post={item} headingLevel="h3" />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
