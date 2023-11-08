import SideNav from "@/components/nav/SideNav";
import "../../styles/globals.css";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <SideNav></SideNav>
      <div className="w-screen h-screen rounded-3xl bg-white text-black overflow-y-scroll">
        {children}
      </div>
    </div>
  );
}
