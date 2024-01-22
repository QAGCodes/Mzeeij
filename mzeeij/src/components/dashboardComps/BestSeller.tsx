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
  console.log(data);
  return (
    <Card
      className="h-full w-full flex-col flex overflow-auto"
      decoration="top"
      decorationColor="indigo"
    >
      <Title>Best Sellers</Title>
      <TabGroup className="h-full flex flex-col">
        <TabList className="mt-8 ">
          <Tab icon={TrendingDownIcon}>Low</Tab>
          <Tab icon={ArrowRightIcon}>Medium</Tab>
          <Tab icon={TrendingUpIcon}>High</Tab>
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
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel className="h-full">
            <div className="flex flex-row overflow-auto h-full">
              {data[1].map((item: any, index: any) => (
                <Image
                  key={item.name} // Prefer using a unique identifier from your data
                  src={item.imgUrl}
                  alt={item.name}
                  height={100}
                  width={100}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel className="h-full">
            <div className="flex flex-row overflow-auto h-full">
              {data[2].map((item: any, index: any) => (
                <Image
                  key={item.name} // Prefer using a unique identifier from your data
                  src={item.imgUrl}
                  alt={item.name}
                  height={100}
                  width={100}
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
