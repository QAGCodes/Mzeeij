import React from "react";
import DashHeader from "@/components/dashboardComps/DashHeader";
import SimpleStatisticsCard from "@/components/dashboardComps/SimpleStatisticsCard";
import OrderByRegion from "@/components/dashboardComps/OrderByRegion";
import BestSeller from "@/components/dashboardComps/BestSeller";
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
    <div className="grid dashboard-grid gap-2 justify-around mx-3 h-full">
      <div className="col-span-3">
        <DashHeader />
      </div>
      <div className="flex row-span-3">
        <SimpleStatisticsCard data={simpleStatsData} />
      </div>
      <div className="flex row-span-3">
        <OrderByRegion data={orderByRegionData} />
      </div>
      <div className="flex row-span-3">
        <BestSeller />
      </div>
      <div className="flex row-span-5 col-span-3">
        <MyTabs />
      </div>
    </div>
  );
};

export default AnalyticsPage;
