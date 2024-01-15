"use client";

import React from "react";

import {
  Card,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@tremor/react";

import SalesPredicition from "@/components/dashboardComps/SalesPrediction";
import RestockPoint from "@/components/dashboardComps/RestockPoint";
import PredictiveAnalysis from "@/components/dashboardComps/PredictiveAnalysis";

const GraphsTabs = ({ data }: { data?: any }) => {
  return (
    <Card
      className="w-full flex-col flex overflow-auto pt-1 pb-0 h-full"
      decoration="top"
      decorationColor="indigo"
    >
      <TabGroup className="">
        <TabList className="">
          <Tab>Sales Predicition</Tab>
          <Tab>Restock Point</Tab>
          <Tab>Predictive Analysis</Tab>
        </TabList>
        <TabPanels className="">
          <TabPanel className="">
            <SalesPredicition data={data[0]} />
          </TabPanel>
          <TabPanel className="">
            <RestockPoint data={data[1]} />
          </TabPanel>
          <TabPanel className="">
            <PredictiveAnalysis data={data[2]} />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
};

export default GraphsTabs;