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
import SalesPerProductGraph from "@/components/dashboardComps/SalesPerProductGraph";

const GraphsTabs = ({ data }: { data: any }) => {
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
          <Tab>Sales per product</Tab>
        </TabList>
        <TabPanels className="">
          <TabPanel className="">
            <SalesPredicition data={data[0]} />
          </TabPanel>
          <TabPanel className="">
            <RestockPoint data={data[1]} />
          </TabPanel>
          <TabPanel className="">
            <SalesPerProductGraph data={data[2]} />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
};

export default GraphsTabs;
