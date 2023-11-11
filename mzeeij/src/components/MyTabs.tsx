"use client";

import React from "react";

import {
  Card,
  Flex,
  Metric,
  ProgressBar,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Title,
} from "@tremor/react";
import {
  UserGroupIcon,
  UserIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  ArrowRightIcon,
} from "@heroicons/react/solid";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import LineGraph from "./dashboardComps/DashboardWidgets/client/LineGraph";

const MyTabs = () => {
  const repeatCount = 10;
  return (
    <Card
      className="w-full flex-col flex overflow-auto pt-1 pb-2"
      decoration="top"
      decorationColor="indigo"
    >
      <TabGroup className="">
        <TabList className="">
          <Tab >Sales Predicition</Tab>
          <Tab>Restock Point</Tab>
          <Tab>Predictive Analysis</Tab>
        </TabList>
        <TabPanels className="">
          <TabPanel className="">
            <LineGraph></LineGraph>
          </TabPanel>
          <TabPanel className="">
            <LineGraph></LineGraph>
          </TabPanel>
          <TabPanel className="">
            <LineGraph></LineGraph>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
};

export default MyTabs;
