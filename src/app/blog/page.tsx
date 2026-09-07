import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostCard from "@/components/blog/PostCard";
import Pagination from "@/components/blog/Pagination";
import CategoryChips from "@/components/blog/CategoryChips";
import BlogCta from "@/components/blog/BlogCta";
import JsonLd from "@/components/blog/JsonLd";
import { categoryCounts, listPosts, POSTS_PER_PAGE } from "@/lib/blog/queries";
import {
  BLOG_DESCRIPTION,
  BLOG_TITLE,
  blogIndexPath,
  blogIndexUrl,
  blogJsonLd,
  breadcrumbJsonLd,
  SITE_NAME,
} from "@/lib/blog/seo";

export const revalidate = 600;

type SearchParams = Promise<{ page?: string | string[] }>;

function parsePage(raw: string | string[] | undefined): number {
  const value = Array.isArray(raw) ? raw[0] : raw;
  if (!value) return 1;
  const n = Number.parseInt(value, 10);
  return Number.isFinite(n) && n > 0 ? n : 1;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const page = parsePage((await searchParams).page);
  const title = page > 1 ? `${BLOG_TITLE} – Page ${page}` : BLOG_TITLE;
  const url = blogIndexUrl(page);
  return {
    title: { absolute: page > 1 ? `${title} · ${SITE_NAME}` : `${BLOG_TITLE} · UK planning guides` },
    description: BLOG_DESCRIPTION,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      title,
      description: BLOG_DESCRIPTION,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: BLOG_DESCRIPTION,
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogIndexPage({ searchParams }: { searchParams: SearchParams }) {
  const page = parsePage((await searchParams).page);

  const [result, counts] = await Promise.all([
    listPosts({ page, pageSize: POSTS_PER_PAGE }),
    categoryCounts(),
  ]);

  if (page > 1 && page > result.totalPages) notFound();

  const { posts, total, totalPages } = result;

  return (
    <>
      <JsonLd data={blogJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ])}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-primary-light/20 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {page > 1 ? `PlanScope Blog – Page ${page}` : "PlanScope Blog"}
          </h1>
          <p className="text-muted text-lg mt-2 max-w-2xl">
            Practical guides to UK planning applications: which reports your council expects, permitted
            development, constraints, costs and how to prepare each document.
          </p>
          <div className="mt-6">
            <CategoryChips counts={counts} totalPosts={total} />
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {posts.length === 0 ? (
            <div className="border border-dashed border-border rounded-2xl p-10 text-center bg-card-bg">
              <h2 className="text-lg font-bold mb-2">Articles are on their way</h2>
              <p className="text-sm text-muted max-w-md mx-auto">
                We publish new guides to UK planning reports every day. Check back shortly, or explore the
                planning document guides in the meantime.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-lg font-bold">{page > 1 ? `Articles – page ${page}` : "Latest articles"}</h2>
                <span className="text-xs bg-primary-light text-primary px-2.5 py-0.5 rounded-full font-semibold">
                  {total} {total === 1 ? "article" : "articles"}
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
              <Pagination page={page} totalPages={totalPages} hrefFor={blogIndexPath} />
            </>
          )}
        </div>
      </section>

      <BlogCta />
    </>
  );
}
