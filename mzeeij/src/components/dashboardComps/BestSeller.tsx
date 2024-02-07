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
          <Tab icon={TrendingDownIcon} className="text-red-600">
            Low
          </Tab>
          <Tab icon={ArrowRightIcon} className="text-orange-400">
            Medium
          </Tab>
          <Tab icon={TrendingUpIcon} className="text-green-500">
            High
          </Tab>
        </TabList>
        <TabPanels className="box-border h-full">
          <TabPanel className="h-full">
            <div className="flex flex-row overflow-auto h-full gap-5">
              {data[0].map((item: any, index: any) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center text-start m-2 bestseller-card"
                >
                  <Image
                    key={item.name} // Prefer using a unique identifier from your data
                    src={item.imgUrl || "/next.svg"}
                    alt={item.name}
                    height={100}
                    width={100}
                    className="m-3"
                  />
                  <p>Predicted: {item.nextMonthPredicitions || "99"}$</p>
                  <p>Actual: {item.totalSales || "99"}$</p>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel className="h-full">
            <div className="flex flex-row overflow-auto h-full gap-5">
              {data[1].map((item: any, index: any) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center text-start m-2 bestseller-card"
                >
                  <Image
                    key={item.name} // Prefer using a unique identifier from your data
                    src={
                      "https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" ||
                      "/next.svg"
                    }
                    alt={item.name}
                    height={100}
                    width={100}
                    className="m-3"
                  />
                  <p>Predicted: {item.nextMonthPredicitions || "99"}$</p>
                  <p>Actual: {item.totalSales || "99"}$</p>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel className="h-full">
            <div className="flex flex-row overflow-auto h-full gap-5">
              {data[2].map((item: any, index: any) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center text-start m-2 bestseller-card"
                >
                  <Image
                    key={item.name} // Prefer using a unique identifier from your data
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" ||
                      "/next.svg"
                    }
                    alt={item.name}
                    height={100}
                    width={100}
                    className="m-3"
                  />
                  <p>Predicted: {item.nextMonthPredicitions || "99"}$</p>
                  <p>Actual: {item.totalSales || "99"}$</p>
                </div>
              ))}
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
};

export default BestSeller;
