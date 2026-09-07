import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostCard from "@/components/blog/PostCard";
import Pagination from "@/components/blog/Pagination";
import CategoryChips from "@/components/blog/CategoryChips";
import BlogCta from "@/components/blog/BlogCta";
import JsonLd from "@/components/blog/JsonLd";
import { BLOG_CATEGORIES } from "@/lib/blog/categories";
import { categoryCounts, listPosts, POSTS_PER_PAGE } from "@/lib/blog/queries";
import { breadcrumbJsonLd, categoryPath, categoryUrl, SITE_NAME } from "@/lib/blog/seo";

// No generateStaticParams here on purpose: this route paginates with `?page=`,
// which makes it request-time dynamic. Declaring generateStaticParams would
// make Next treat on-demand renders as static generation, where reading
// searchParams throws DYNAMIC_SERVER_USAGE (verified against `next start`).
export const revalidate = 600;
export const dynamicParams = true;

type Params = Promise<{ category: string }>;
type SearchParams = Promise<{ page?: string | string[] }>;

function parsePage(raw: string | string[] | undefined): number {
  const value = Array.isArray(raw) ? raw[0] : raw;
  if (!value) return 1;
  const n = Number.parseInt(value, 10);
  return Number.isFinite(n) && n > 0 ? n : 1;
}

function findCategory(slug: string) {
  return BLOG_CATEGORIES.find((category) => category.slug === slug);
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = findCategory(slug);
  if (!category) return { title: "Category not found", robots: { index: false, follow: false } };

  const page = parsePage((await searchParams).page);
  const title = page > 1 ? `${category.label} – Page ${page}` : category.label;
  const description = `${category.description} Guides and explainers from the ${SITE_NAME} blog.`;
  const url = categoryUrl(category.slug, page);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      title: `${title} · ${SITE_NAME}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${SITE_NAME}`,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogCategoryPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { category: slug } = await params;
  const category = findCategory(slug);
  if (!category) notFound();

  const page = parsePage((await searchParams).page);
  const [result, counts] = await Promise.all([
    listPosts({ page, pageSize: POSTS_PER_PAGE, category: category.slug }),
    categoryCounts(),
  ]);

  if (page > 1 && page > result.totalPages) notFound();

  const { posts, total, totalPages } = result;
  const allPosts = Object.values(counts).reduce((sum, n) => sum + n, 0);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: category.label, href: categoryPath(category.slug) },
        ])}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-primary-light/20 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-muted mb-4">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{category.label}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {page > 1 ? `${category.label} – Page ${page}` : category.label}
          </h1>
          <p className="text-muted text-lg mt-2 max-w-2xl">{category.description}</p>
          <div className="mt-6">
            <CategoryChips counts={counts} active={category.slug} totalPosts={allPosts} />
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {posts.length === 0 ? (
            <div className="border border-dashed border-border rounded-2xl p-10 text-center bg-card-bg">
              <h2 className="text-lg font-bold mb-2">No articles in this category yet</h2>
              <p className="text-sm text-muted max-w-md mx-auto mb-5">
                New guides are published every day. Browse the full blog while this section fills up.
              </p>
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Browse all articles &rarr;
              </Link>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-lg font-bold">
                  {page > 1 ? `${category.label} articles – page ${page}` : `Latest in ${category.label}`}
                </h2>
                <span className="text-xs bg-primary-light text-primary px-2.5 py-0.5 rounded-full font-semibold">
                  {total} {total === 1 ? "article" : "articles"}
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
              <Pagination
                page={page}
                totalPages={totalPages}
                hrefFor={(n) => categoryPath(category.slug, n)}
              />
            </>
          )}
        </div>
      </section>

      <BlogCta />
    </>
  );
}
