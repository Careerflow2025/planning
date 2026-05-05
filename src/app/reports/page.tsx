import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ReportBrowser from "@/components/ReportBrowser";

export const metadata = {
  title: "Browse Reports — PlanScope",
  description:
    "Browse all 66 UK planning report types. Search by name, category, or issue. Find the right report for your planning application.",
};

export default function ReportsPage() {
  return (
    <>
      <Header />
      <main className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-3">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              All planning report types
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              66 report types across 11 categories. Search by name, keyword, or
              browse by category.
            </p>
          </div>
          <ReportBrowser />
        </div>
      </main>
      <Footer />
    </>
  );
}
