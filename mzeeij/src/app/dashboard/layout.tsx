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
      <div className="rounded-l-3xl bg-white text-black w-[85vw] h-full overflow-auto">
        {children}
      </div>
    </div>
  );
}
