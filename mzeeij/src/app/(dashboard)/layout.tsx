import SideNav from "@/components/nav/SideNav";
import "../../styles/globals.css";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row flex-grow">
      <SideNav></SideNav>
      <div className="w-screen h-screen rounded-lg bg-white text-black overflow-auto">
        {children}
      </div>
    </div>
  );
}
