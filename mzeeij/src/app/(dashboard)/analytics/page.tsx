// dashboard/index.tsx
import React from "react";
import DashboardLayout from "../layout";
import DashHeader from "@/components/dashboardComps/DashHeader";
import DashContent from "@/components/dashboardComps/DashContent";

const AnalyticsPage = () => {
  return (
    <main className="flex flex-col h-screen w-full">
      <DashHeader></DashHeader>
      <DashContent></DashContent>
    </main>
  );
};

export default AnalyticsPage;
