"use client";

import { Revenue } from "@/lib/definitions";
import { Card, DonutChart, Title } from "@tremor/react";

const valueFormatter = (number: number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const OrderByRegion = ({data}:{data: Revenue[]}) => {
  return (
    <Card
      className="max-w-xs mx-auto h-full w-full flex-col flex justify-evenly gap-1"
      decoration="top"
      decorationColor="indigo"
    >
      <Title>Sales</Title>
      <DonutChart
        className="mt-6"
        data={data}
        category="revenue"
        index="month"
        valueFormatter={valueFormatter}
      />
    </Card>
  );
};

export default OrderByRegion;
