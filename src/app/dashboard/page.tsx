import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import DashboardView from "@/components/DashboardView";

export const metadata = {
  title: "Dashboard — PlanScope",
  description: "Manage your sites, applications, and planning reports.",
};

export default function DashboardPage() {
  return (
    <>
      <Header />
      <DashboardView />
      <Footer />
    </>
  );
}
