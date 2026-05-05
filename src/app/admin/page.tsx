import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import AdminPanel from "@/components/AdminPanel";

export const metadata = {
  title: "Admin — PlanScope",
  description: "PlanScope admin panel for managing users, reports, and platform.",
};

export default function AdminPage() {
  return (
    <>
      <Header />
      <AdminPanel />
      <Footer />
    </>
  );
}
