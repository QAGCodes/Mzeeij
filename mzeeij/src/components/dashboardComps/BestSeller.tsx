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
import { BestSeller } from "@/lib/definitions";

const BestSeller = ({ data }: { data?: BestSeller[][] }) => {
  const repeatCount = 10;
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
              {[...Array(repeatCount)].map((_, index) => (
                <Image
                  key={index} // Providing a unique key for each child
                  src="/next.svg"
                  alt="item"
                  height={75}
                  width={75}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel className="h-full">
            <div className="flex flex-row overflow-auto h-full">
              {[...Array(repeatCount)].map((_, index) => (
                <Image
                  key={index} // Providing a unique key for each child
                  src="/vercel.svg"
                  alt="item"
                  height={75}
                  width={75}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel className="h-full">
            <div className="flex flex-row overflow-auto h-full">
              {[...Array(repeatCount)].map((_, index) => (
                <Image
                  key={index} // Providing a unique key for each child
                  src="/next.svg"
                  alt="item"
                  height={75}
                  width={75}
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
