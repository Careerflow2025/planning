import Link from "next/link";

interface BlogCtaProps {
  /** "band" = full-width primary section (index pages); "card" = rounded block inside an article. */
  variant?: "band" | "card";
}

export default function BlogCta({ variant = "band" }: BlogCtaProps) {
  if (variant === "card") {
    return (
      <aside className="bg-primary rounded-2xl p-6 md:p-8 my-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary-light mb-1">
            Ready to start your application?
          </p>
          <h2 className="text-xl font-bold text-white">
            Find out which planning reports your project needs
          </h2>
          <p className="text-primary-light text-sm mt-1.5 max-w-xl">
            Enter your postcode on PlanScope, confirm the property and answer a few questions. We recommend
            the documents your council will expect and draft them in minutes.
          </p>
        </div>
        <Link
          href="/"
          className="flex-shrink-0 inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
        >
          Enter your postcode on PlanScope
        </Link>
      </aside>
    );
  }

  return (
    <section className="py-12 bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Not sure which documents your council will ask for?
        </h2>
        <p className="text-primary-light">
          Enter your postcode and PlanScope recommends the right reports for your project, then drafts them
          in minutes.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
        >
          Enter your postcode on PlanScope
        </Link>
      </div>
    </section>
  );
}
