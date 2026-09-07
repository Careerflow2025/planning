import Link from "next/link";
import type { BlogPostCard } from "@/lib/blog/types";
import { formatDateGb, postPath, toIsoDate } from "@/lib/blog/seo";

interface PostCardProps {
  post: BlogPostCard;
  /** Render the title as h2 (index grids) or h3 (related-post grids). */
  headingLevel?: "h2" | "h3";
}

export default function PostCard({ post, headingLevel = "h2" }: PostCardProps) {
  const Heading = headingLevel;
  return (
    <Link
      href={postPath(post.slug)}
      className="group bg-white border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all block h-full flex flex-col"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="text-xs font-bold text-primary bg-primary-light px-2 py-0.5 rounded">
          {post.category_label}
        </span>
        <span className="text-xs text-muted whitespace-nowrap">
          {post.reading_minutes} min read
        </span>
      </div>

      <Heading className="font-semibold text-base leading-snug mb-2 group-hover:text-primary transition-colors">
        {post.title}
      </Heading>

      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
        {post.excerpt}
      </p>

      <div className="mt-auto flex items-center justify-between pt-3 border-t border-border/50">
        <time dateTime={toIsoDate(post.published_at)} className="text-xs text-muted">
          {formatDateGb(post.published_at)}
        </time>
        <span className="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          Read article &rarr;
        </span>
      </div>
    </Link>
  );
}
