import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { BLOG_DESCRIPTION, BLOG_TITLE, SITE_NAME } from "@/lib/blog/seo";

export const metadata: Metadata = {
  title: {
    default: BLOG_TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: BLOG_DESCRIPTION,
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
