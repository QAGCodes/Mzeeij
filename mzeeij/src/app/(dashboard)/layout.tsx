import SideNav from "@/components/nav/SideNav";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row flex-grow">
      <SideNav></SideNav>
      <div className="flex-grow h-screen rounded-lg bg-white text-black">
        {children}
      </div>
    </div>
  );
}
