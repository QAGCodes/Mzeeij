import React from "react";
import SimpleStatisticsCard from "./DashboardWidgets/SimpleStatisticsCard";

const DashContent = () => {
  return (
    <div className="flex-grow grid grid-cols-3 grid-rows-5 gap-2 overflow-scroll">
      <div className="min-h-[3px] bg-red-500 row-span-2"></div>
      <div className="min-h-[3px] bg-green-500"></div>
      <div className="min-h-[3px] bg-blue-500"></div>
      <div className="min-h-[3px] bg-gray-500 col-span-2"></div>
      <div className="min-h-[3px] bg-orange-500"></div>
      <div className="min-h-[3px] bg-amber-900 col-span-2"></div>
      <div className="bg-black col-span-3 row-span-2"></div>
    </div>
  );
};

export default DashContent;
