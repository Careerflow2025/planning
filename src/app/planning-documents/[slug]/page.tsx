import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { getReportSEOBySlug, getAllReportSlugs } from "@/data/report-seo";

export function generateStaticParams() {
  return getAllReportSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const report = getReportSEOBySlug(slug);
  if (!report) return {};
  return {
    title: report.title,
    description: report.metaDescription,
  };
}

export default async function ReportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const report = getReportSEOBySlug(slug);
  if (!report) notFound();

  return (
    <>
      <Header />

      <article className="py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/planning-documents" className="hover:text-foreground transition-colors">Planning Documents</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{report.h1}</span>
          </nav>

          {/* H1 */}
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            {report.h1}
          </h1>

          <p className="text-lg text-muted leading-relaxed mb-8">
            {report.intro}
          </p>

          {/* Quick facts bar */}
          <div className="grid grid-cols-3 gap-4 p-5 bg-primary/5 rounded-t-2xl border border-b-0 border-primary/10">
            <div className="text-center">
              <p className="text-xs text-muted uppercase tracking-wider font-medium mb-1">Typical Cost</p>
              <p className="text-sm font-bold text-gray-900">£300 – £5,000+</p>
            </div>
            <div className="text-center border-x border-primary/10">
              <p className="text-xs text-muted uppercase tracking-wider font-medium mb-1">Turnaround</p>
              <p className="text-sm font-bold text-gray-900">1 – 6 weeks</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted uppercase tracking-wider font-medium mb-1">AI Report</p>
              <p className="text-sm font-bold text-primary">Minutes</p>
            </div>
          </div>

          {/* CTA block — right after facts */}
          <div className="bg-primary rounded-b-2xl p-6 mb-10 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">
                Generate your {report.h1} with AI
              </h3>
              <p className="text-primary-light text-sm mt-0.5">
                Skip the weeks of waiting. Get a professional draft in minutes.
              </p>
            </div>
            <Link
              href="/"
              className="flex-shrink-0 px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Content sections */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">What is a {report.h1}?</h2>
            <p className="text-gray-700 leading-relaxed">{report.whatIs}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">When is a {report.h1} required?</h2>
            <p className="text-gray-700 leading-relaxed">{report.whenRequired}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">What does a {report.h1} include?</h2>
            <p className="text-gray-700 leading-relaxed">{report.whatIncludes}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">How much does a {report.h1} cost?</h2>
            <p className="text-gray-700 leading-relaxed">{report.cost}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">Who can prepare a {report.h1}?</h2>
            <p className="text-gray-700 leading-relaxed">{report.whoCanPrepare}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3">How long does a {report.h1} take?</h2>
            <p className="text-gray-700 leading-relaxed">{report.howLong}</p>
          </section>

          {/* FAQ Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {report.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-gray-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-white hover:bg-gray-50 transition-colors">
                    <h3 className="text-sm font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <svg
                      className="w-5 h-5 text-muted flex-shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 pt-1">
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Back link */}
          <div className="pt-6 border-t border-gray-200">
            <Link
              href="/planning-documents"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              Back to all Planning Documents
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
