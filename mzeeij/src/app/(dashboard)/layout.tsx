import SideNav from "@/components/nav/SideNav";
import "@/styles/globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row w-screen h-screen">
      <SideNav />
      <div className="rounded-l-3xl bg-white text-black overflow-scroll w-[85vw]">
        {children}
      </div>
    </div>
  );
}
