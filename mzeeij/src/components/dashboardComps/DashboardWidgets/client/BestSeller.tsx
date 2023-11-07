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

const BestSeller = () => {
  const repeatCount = 10;
  return (
    <Card
      className="box-border h-full w-full flex-col flex overflow-auto"
      decoration="top"
      decorationColor="indigo"
    >
      <Title>Best Sellers</Title>
      <TabGroup>
        <TabList className="mt-8">
          <Tab icon={TrendingUpIcon}>High</Tab>
          <Tab icon={ArrowRightIcon}>Medium</Tab>
          <Tab icon={TrendingDownIcon}>Low</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="mt-10 flex flex-row overflow-auto pb-6 gap-3">
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
          <TabPanel>
            <div className="mt-10 flex flex-row overflow-auto pb-6 gap-3">
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
          <TabPanel>
            <div className="mt-10 flex flex-row overflow-auto pb-6 gap-3">
              {[...Array(repeatCount)].map((_, index) => (
                <Image
                  key={index} // Providing a unique key for each child
                  src="/mzeeij_logo.webp"
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
