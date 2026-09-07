import Link from "next/link";

interface PaginationProps {
  page: number;
  totalPages: number;
  /** Builds the href for a given page number (page 1 must be the clean URL). */
  hrefFor: (page: number) => string;
}

function pageWindow(page: number, totalPages: number): Array<number | "gap"> {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const pages = new Set<number>([1, totalPages, page - 1, page, page + 1]);
  if (page <= 3) {
    pages.add(2);
    pages.add(3);
    pages.add(4);
  }
  if (page >= totalPages - 2) {
    pages.add(totalPages - 1);
    pages.add(totalPages - 2);
    pages.add(totalPages - 3);
  }
  const sorted = [...pages].filter((p) => p >= 1 && p <= totalPages).sort((a, b) => a - b);
  const out: Array<number | "gap"> = [];
  let previous = 0;
  for (const p of sorted) {
    if (previous && p - previous > 1) out.push("gap");
    out.push(p);
    previous = p;
  }
  return out;
}

const baseButton =
  "inline-flex items-center justify-center min-w-[2.5rem] h-10 px-3 rounded-lg text-sm font-semibold transition-colors";
const inactiveButton = `${baseButton} bg-white border border-border text-muted hover:border-primary hover:text-primary`;
const activeButton = `${baseButton} bg-primary text-white border border-primary`;
const disabledButton = `${baseButton} bg-white border border-border text-gray-300 cursor-not-allowed`;

export default function Pagination({ page, totalPages, hrefFor }: PaginationProps) {
  if (totalPages <= 1) return null;

  const hasPrevious = page > 1;
  const hasNext = page < totalPages;

  return (
    <nav aria-label="Pagination" className="mt-10 flex flex-wrap items-center justify-center gap-2">
      {hasPrevious ? (
        <Link href={hrefFor(page - 1)} rel="prev" className={inactiveButton} aria-label="Previous page">
          &larr; Previous
        </Link>
      ) : (
        <span className={disabledButton} aria-disabled="true">
          &larr; Previous
        </span>
      )}

      {pageWindow(page, totalPages).map((item, index) =>
        item === "gap" ? (
          <span key={`gap-${index}`} className="px-1 text-muted" aria-hidden="true">
            &hellip;
          </span>
        ) : item === page ? (
          <span key={item} className={activeButton} aria-current="page">
            {item}
          </span>
        ) : (
          <Link key={item} href={hrefFor(item)} className={inactiveButton} aria-label={`Page ${item}`}>
            {item}
          </Link>
        )
      )}

      {hasNext ? (
        <Link href={hrefFor(page + 1)} rel="next" className={inactiveButton} aria-label="Next page">
          Next &rarr;
        </Link>
      ) : (
        <span className={disabledButton} aria-disabled="true">
          Next &rarr;
        </span>
      )}
    </nav>
  );
}
