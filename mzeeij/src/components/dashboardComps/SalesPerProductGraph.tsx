import { BarChart, Card, Title, Subtitle } from "@tremor/react";

const chartdata = [
  {
    name: "Electronics",
    "Sales": 2488,
  },
  {
    name: "Furniture",
    "Sales": 1445,
  },
  {
    name: "Grocery",
    "Sales": 743,
  },
  {
    name: "Tools",
    "Sales": 281,
  },
  {
    name: "Farming",
    "Sales": 251,
  },
  {
    name: "Household supplies",
    "Sales": 232,
  },
  {
    name: "Clothing",
    "Sales": 98,
  },
];

const valueFormatter = (number: any) =>
  `$${new Intl.NumberFormat("us").format(number).toString()}`;

const SalesPerProductGraph = ({ data }: { data?: Array<Object> }) => (
  <Card>
    <Title>Sales per product viscal year (2021)</Title>
    <Subtitle>
      These are the most profitable products in the last 12 months
    </Subtitle>
    <BarChart
      className=""
      data={chartdata} // data={data}
      index="name" // index="Product Name"
      categories={["Sales"]} // categories={["Product Sales"]}
      colors={["blue"]}
      valueFormatter={valueFormatter}
      yAxisWidth={60}
    />
  </Card>
);

export default SalesPerProductGraph;
