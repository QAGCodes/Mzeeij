"use client";

import { Card, DonutChart, Title } from "@tremor/react";

const valueFormatter = (number: number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const OrderByRegion = ({ data }: any) => {
  return (
    <Card
      className="h-full w-full flex-col flex  gap-1"
      decoration="top"
      decorationColor="indigo"
    >
      <Title>Orders by Region</Title>
      <DonutChart
        className="mt-6 h-full"
        data={data}
        category="sales"
        index="regionName"
        valueFormatter={valueFormatter}
      />
    </Card>
  );
};

export default OrderByRegion;
