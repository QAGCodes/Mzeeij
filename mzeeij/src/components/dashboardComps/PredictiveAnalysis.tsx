import { BarChart, Card, Title, Subtitle } from "@tremor/react";

const chartdata = [
  {
    name: "Amphibians",
    "Number of threatened species": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
  {
    name: "Ferns",
    "Number of threatened species": 281,
  },
  {
    name: "Arachnids",
    "Number of threatened species": 251,
  },
  {
    name: "Corals",
    "Number of threatened species": 232,
  },
  {
    name: "Algae",
    "Number of threatened species": 98,
  },
];

const valueFormatter = (number: any) =>
  `$${new Intl.NumberFormat("us").format(number).toString()}`;

const PredictiveAnalysis = ({ data }: { data?: Array<Object> }) => (
  <Card>
    <Title>Number of species threatened with extinction (2021)</Title>
    <Subtitle>
      The IUCN Red List has assessed only a small share of the total known
      species in the world.
    </Subtitle>
    <BarChart
      className=""
      data={chartdata} // data={data}
      index="name" // index="Product Name"
      categories={["Number of threatened species"]} // categories={["Product Sales"]}
      colors={["blue"]}
      valueFormatter={valueFormatter}
      yAxisWidth={60}
    />
  </Card>
);

export default PredictiveAnalysis;
