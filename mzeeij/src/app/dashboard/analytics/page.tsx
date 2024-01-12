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
  fetchSalesPrediction,
  fetchRestockPoints,
  fetchPredictiveAnalysis,
} from "@/lib/data";

const AnalyticsPage = async () => {
  // Check for a session
  // If there is a session, then we will have an object containg the user data.

  // const simpleStatsData = await fetchStatisticsCardData();
  // const orderByRegionData = await fetchSalesByRegion();
  // const bestSellerData = await fetchBestSellersData();
  // const salesPredicitionData = await fetchSalesPrediction();
  // const restockPointData = await fetchRestockPoints();
  // const predicitiveAnalysisData = await fetchPredictiveAnalysis();
  // const graphsData = [salesPredicitionData, restockPointData, predicitiveAnalysisData]
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

  const bestSellerData = [
    [
      {
        imgUrl: "/One8_logo.svg",
        name: "low",
      },
    ],
    [
      {
        imgUrl: "/One8_logo.svg",
        name: "medium",
      },
      {
        imgUrl: "/One8_logo.svg",
        name: "medium",
      },
    ],
    [
      {
        imgUrl: "/One8_logo.svg",
        name: "high",
      },
      {
        imgUrl: "/One8_logo.svg",
        name: "medium",
      },
      {
        imgUrl: "/One8_logo.svg",
        name: "medium",
      },
    ],
  ];

  const graphsData = [
    [
      {
        date: "Jan 22",
        predicitions: 2890,
        actual: 2338,
      },
      {
        date: "Feb 22",
        predicitions: 2756,
        actual: 2103,
      },
      {
        date: "Mar 22",
        predicitions: 3322,
        actual: 2194,
      },
      {
        date: "Apr 22",
        predicitions: 3470,
        actual: 2108,
      },
      {
        date: "May 22",
        predicitions: 3475,
        actual: 1812,
      },
      {
        date: "Jun 22",
        predicitions: 3129,
        actual: 1726,
      },
    ],
    [
      {
        date: "Jan 23",
        "Distance Running": 167,
        "Road Cycling": 145,
        "Open Water Swimming": 135,
        "Hatha Yoga": 115,
        "Street Basketball": 150,
      },
      {
        date: "Feb 23",
        "Distance Running": 125,
        "Road Cycling": 110,
        "Open Water Swimming": 155,
        "Hatha Yoga": 85,
        "Street Basketball": 180,
      },
      {
        date: "Mar 23",
        "Distance Running": 156,
        "Road Cycling": 149,
        "Open Water Swimming": 145,
        "Hatha Yoga": 90,
        "Street Basketball": 130,
      },
      {
        date: "Apr 23",
        "Distance Running": 165,
        "Road Cycling": 112,
        "Open Water Swimming": 125,
        "Hatha Yoga": 105,
        "Street Basketball": 170,
      },
      {
        date: "May 23",
        "Distance Running": 153,
        "Road Cycling": 138,
        "Open Water Swimming": 165,
        "Hatha Yoga": 100,
        "Street Basketball": 110,
      },
      {
        date: "Jun 23",
        "Distance Running": 124,
        "Road Cycling": 145,
        "Open Water Swimming": 175,
        "Hatha Yoga": 75,
        "Street Basketball": 140,
      },
    ],
    [
      {
        name: "Amphibians",
        "Number of threatened species": 2488,
      },
      {
        name: "Birds",
        "Number of threatened species": 1445,
      },
      {
        name: "Crustaceans",
        "Number of threatened species": 743,
      },
      {
        name: "Ferns",
        "Number of threatened species": 281,
      },
      {
        name: "Arachnids",
        "Number of threatened species": 251,
      },
      {
        name: "Corals",
        "Number of threatened species": 232,
      },
      {
        name: "Algae",
        "Number of threatened species": 98,
      },
    ],
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
        <BestSeller data={bestSellerData} />
      </div>
      <div className="flex row-span-5 col-span-3">
        <GraphsTabs data={graphsData} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
