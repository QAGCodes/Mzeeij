"use client";

import React from "react";

import { Card, Text, Metric, Title } from "@tremor/react";
import { Separator } from "@/components/ui/separator";

const SimpleStatisticsCard = () => {
  return (
    <Card
      className="h-full w-full flex-col flex justify-evenly gap-1"
      decoration="top"
      decorationColor="indigo"
    >
      <Title>Statistics</Title>
      <Text>Item Count</Text>
      <Metric>34,743</Metric>
      <Separator></Separator>
      <Text>Number of Orders</Text>
      <Metric>2085</Metric>
      <Separator></Separator>
      <Text>Number of Returns</Text>
      <Metric>400</Metric>
    </Card>
  );
};

export default SimpleStatisticsCard;
