import React from "react";
import DashboardLayout from "../layout";
import DashHeader from "@/components/dashboardComps/DashHeader";
import DashContent from "@/components/dashboardComps/DashContent";

const AnalyticsPage = () => {
  return (
    <main className="flex flex-col flex-grow h-screen w-full overflow-auto pb-4">
      <DashHeader></DashHeader>
      <DashContent></DashContent>
    </main>
  );
};

export default AnalyticsPage;
