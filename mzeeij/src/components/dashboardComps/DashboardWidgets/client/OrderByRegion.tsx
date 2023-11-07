"use client";

import { Card, DonutChart, Title } from "@tremor/react";

const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "London",
    sales: 4567,
  },
  {
    name: "Hong Kong",
    sales: 3908,
  },
  {
    name: "San Francisco",
    sales: 2400,
  },
  {
    name: "Singapore",
    sales: 1908,
  },
  {
    name: "Zurich",
    sales: 1398,
  },
];

const valueFormatter = (number: number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const OrderByRegion = () => {
  return (
    <Card
      className="max-w-xs mx-auto h-full w-full flex-col flex justify-evenly gap-1"
      decoration="top"
      decorationColor="indigo"
    >
      <Title>Sales</Title>
      <DonutChart
        className="mt-6"
        data={cities}
        category="sales"
        index="name"
        valueFormatter={valueFormatter}
        colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
      />
    </Card>
  );
};

export default OrderByRegion;
