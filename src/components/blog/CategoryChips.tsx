import Link from "next/link";
import { BLOG_CATEGORIES } from "@/lib/blog/categories";
import { BLOG_PATH, categoryPath } from "@/lib/blog/seo";

interface CategoryChipsProps {
  /** Published-post count per category slug; categories with 0 posts are hidden. */
  counts: Record<string, number>;
  /** Currently selected category slug (undefined on the main index). */
  active?: string;
  totalPosts: number;
}

const chipBase = "px-3 py-1.5 rounded-full text-xs font-semibold transition-colors inline-flex items-center gap-1.5";
const chipActive = `${chipBase} bg-primary text-white`;
const chipInactive = `${chipBase} bg-white border border-border text-muted hover:border-primary hover:text-primary`;

export default function CategoryChips({ counts, active, totalPosts }: CategoryChipsProps) {
  const visible = BLOG_CATEGORIES.filter((category) => (counts[category.slug] ?? 0) > 0);
  if (visible.length === 0 && totalPosts === 0) return null;

  return (
    <nav aria-label="Blog categories" className="flex flex-wrap gap-2">
      <Link href={BLOG_PATH} className={active ? chipInactive : chipActive}>
        All articles
        <span className={active ? "text-gray-400" : "text-primary-light"}>{totalPosts}</span>
      </Link>
      {visible.map((category) => {
        const isActive = category.slug === active;
        return (
          <Link
            key={category.slug}
            href={categoryPath(category.slug)}
            className={isActive ? chipActive : chipInactive}
            aria-current={isActive ? "page" : undefined}
          >
            {category.label}
            <span className={isActive ? "text-primary-light" : "text-gray-400"}>
              {counts[category.slug] ?? 0}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
