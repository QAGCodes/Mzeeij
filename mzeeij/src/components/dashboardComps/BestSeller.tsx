"use client";

import React from "react";

import {
  Card,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Title,
} from "@tremor/react";
import {
  TrendingUpIcon,
  TrendingDownIcon,
  ArrowRightIcon,
} from "@heroicons/react/solid";
import Image from "next/image";

const BestSeller = ({ data }: { data: any }) => {
  return (
    <Card
      className="h-full w-full flex-col flex overflow-auto"
      decoration="top"
      decorationColor="indigo"
    >
      <Title>Best Sellers</Title>
      <TabGroup className="h-full flex flex-col">
        <TabList className="mt-8 ">
          <Tab
            icon={TrendingDownIcon}
            className="text-red-600 hover:text-red-600"
          >
            Low
          </Tab>
          <Tab
            icon={ArrowRightIcon}
            className="text-orange-400 hover:text-orange-400"
          >
            Medium
          </Tab>
          <Tab
            icon={TrendingUpIcon}
            className="text-green-500 hover:text-green-500"
          >
            High
          </Tab>
        </TabList>
        <TabPanels className="box-border h-full">
          <TabPanel className="h-full">
            <div className="flex flex-row overflow-auto h-full">
              {data[0].map((item: any, index: any) => (
                <Image
                  key={item.name} // Prefer using a unique identifier from your data
                  src={item.imgUrl || "/next.svg"}
                  alt={item.name}
                  height={100}
                  width={100}
                  className="m-3"
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel className="h-full">
            <div className="flex flex-row overflow-auto h-full">
              {data[1].map((item: any, index: any) => (
                <Image
                  key={item.name} // Prefer using a unique identifier from your data
                  src={
                    "https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                  }
                  alt={item.name}
                  height={100}
                  width={100}
                  className="m-3"
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel className="h-full">
            <div className="flex flex-row overflow-auto h-full">
              {data[2].map((item: any, index: any) => (
                <Image
                  key={item.name} // Prefer using a unique identifier from your data
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
                  }
                  alt={item.name}
                  height={100}
                  width={100}
                  className="m-3"
                />
              ))}
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
};

export default BestSeller;
