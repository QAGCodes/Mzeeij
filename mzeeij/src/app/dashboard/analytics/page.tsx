import React from "react";
import DashHeader from "@/components/dashboardComps/DashHeader";
import SimpleStatisticsCard from "@/components/dashboardComps/SimpleStatisticsCard";
import OrderByRegion from "@/components/dashboardComps/OrderByRegion";
import BestSeller from "@/components/dashboardComps/BestSeller";
import GraphsTabs from "@/components/dashboardComps/GraphsTabs";
import {
  fetchStatisticsCardData,
  fetchSalesByRegion,
  fetchBestSellersData,
  fetchRestockPointDummy,
  fetchSalesPrediction,
} from "@/lib/data";

const AnalyticsPage = async () => {
  // Check for a session
  // If there is a session, then we will have an object containg the user data.

  const simpleStatsData = await fetchStatisticsCardData({});
  const orderByRegionData = await fetchSalesByRegion({});
  const bestSellerData = await fetchBestSellersData({});
  const salesPredicitionData = await fetchSalesPrediction({});
  const restockPointData = await fetchRestockPointDummy(); //restockpointsplit
  const predicitiveAnalysisData = await []; //TODO: fetchSalesPerProduct({})
  const graphsData = [
    salesPredicitionData,
    restockPointData,
    predicitiveAnalysisData,
  ];

  // If there is no session, then we will redirect to the login page.

  return (
    <div className="grid dashboard-grid gap-2 justify-around mx-3 h-full">
      <div className="flex flex-col ml-6 mt-3 col-span-3">
        <text className="font-normal text-xl">Welcome back, Qusai</text>
        <text className="font-light text-md">
          Track, manage and forecast your orders.
        </text>
      </div>
      <div className="flex row-span-3">
        <SimpleStatisticsCard data={simpleStatsData} />
      </div>
      <div className="flex row-span-3">
        <OrderByRegion data={orderByRegionData} />
      </div>
      <div className="flex row-span-3">
        <BestSeller data={bestSellerData} />
      </div>
      <div className="flex row-span-5 col-span-3">
        <GraphsTabs data={graphsData} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
