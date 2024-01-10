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
  // Check for a session
  // If there is a session, then we will have an object containg the user data.
  // const simpleStatsData = await fetchSimpleStats();
  // const orderByRegionData = await fetchOrderByRegion();
  const simpleStatsData = {
    orderNum: 303,
    returnNum: 505,
    itemNum: 10000,
  };
  const orderByRegionData = [
    {
      name: "New York",
      sales: 9800,
    },
    {
      name: "London",
      sales: 4567,
    },
    {
      name: "Hong Kong",
      sales: 3908,
    },
    {
      name: "San Francisco",
      sales: 2400,
    },
    {
      name: "Singapore",
      sales: 1908,
    },
    {
      name: "Zurich",
      sales: 1398,
    },
  ];
  // If there is no session, then we will redirect to the login page.

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
