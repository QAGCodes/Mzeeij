import React from "react";
import DashHeader from "@/components/dashboardComps/DashHeader";
import SimpleStatisticsCard from "@/components/dashboardComps/DashboardWidgets/client/SimpleStatisticsCard";
import OrderByRegion from "@/components/dashboardComps/DashboardWidgets/client/OrderByRegion";
import BestSeller from "@/components/dashboardComps/DashboardWidgets/client/BestSeller";
import MyTabs from "@/components/misc/MyTabs";
import {
  fetchSimpleStats,
  fetchOrderByRegion,
  fetchBestSellers,
} from "@/lib/data";

const AnalyticsPage = async () => {
  const simpleStatsData = await fetchSimpleStats();
  const orderByRegionData = await fetchOrderByRegion();

  return (
    <>
      <DashHeader></DashHeader>
      <div className="grid dashboard-grid gap-2 overflow-auto justify-around mx-3 h-full">
        <div className="flex row-span-4">
          <SimpleStatisticsCard data={simpleStatsData}></SimpleStatisticsCard>
        </div>
        <div className="flex row-span-4">
          <OrderByRegion data={orderByRegionData}></OrderByRegion>
        </div>
        <div className="flex row-span-4 h-full">
          <BestSeller></BestSeller>
        </div>
        <div className="flex row-span-6 col-span-3">
          <MyTabs></MyTabs>
        </div>
      </div>
    </>
  );
};

export default AnalyticsPage;
