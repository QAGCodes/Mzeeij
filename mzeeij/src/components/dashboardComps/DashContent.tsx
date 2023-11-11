import React from "react";
import SimpleStatisticsCard from "./DashboardWidgets/client/SimpleStatisticsCard";
import OrderByRegion from "./DashboardWidgets/client/OrderByRegion";
import BestSeller from "./DashboardWidgets/client/BestSeller";
import LineGraph from "./DashboardWidgets/client/LineGraph";
import MyTabs from "../MyTabs";

const DashContent = () => {
  return (
    <div className="grid dashboard-grid gap-2 overflow-auto justify-around mx-3">
      <div className="flex row-span-4">
        <SimpleStatisticsCard></SimpleStatisticsCard>
      </div>
      <div className="flex row-span-4">
        <OrderByRegion></OrderByRegion>
      </div>
      <div className="flex row-span-4">
        <BestSeller></BestSeller>
      </div>
      <div className="flex row-span-6 col-span-3">
        {/* <LineGraph></LineGraph> */}
        <MyTabs></MyTabs>
      </div>
    </div>
  );
};

export default DashContent;
