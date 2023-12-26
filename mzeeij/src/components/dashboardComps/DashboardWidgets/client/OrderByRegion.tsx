"use client";

import { Revenue } from "@/lib/definitions";
import { Card, DonutChart, Title } from "@tremor/react";

const valueFormatter = (number: number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const OrderByRegion = ({ data }: { data: Revenue[] }) => {
  const label = "label";
  const quantity = "quantity";

  return (
    <Card
      className="h-full w-full flex-col flex  gap-1"
      decoration="top"
      decorationColor="indigo"
    >
      <Title>Sales</Title>
      <DonutChart
        className="mt-6 h-full"
        data={data}
        category={quantity}
        index={label}
        valueFormatter={valueFormatter}
      />
    </Card>
  );
};

export default OrderByRegion;
