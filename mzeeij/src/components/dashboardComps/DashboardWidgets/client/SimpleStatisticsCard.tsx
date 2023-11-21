"use client";

import React from "react";

import { Card, Text, Metric, Title } from "@tremor/react";
import { Separator } from "@/components/ui/separator";

import { SimpleStats } from "@/lib/definitions";

const SimpleStatisticsCard = ({data}: {data: SimpleStats}) => {
  return (
    <Card
      className="h-full w-full flex-col flex justify-evenly gap-1"
      decoration="top"
      decorationColor="indigo"
    >
      <Title>Statistics</Title>
      <Text>Item Count</Text>
      <Metric>{data.itemNum}</Metric>
      <Separator></Separator>
      <Text>Number of Orders</Text>
      <Metric>{data.orderNum}</Metric>
      <Separator></Separator>
      <Text>Number of Returns</Text>
      <Metric>{data.returnNum}</Metric>
    </Card>
  );
};

export default SimpleStatisticsCard;
