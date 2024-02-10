"use client";
import { Card, CategoryBar, Flex, Text } from "@tremor/react";

const RestockPoint = ({ data }: { data: Array<Object> }) => {
  console.log(data);

  const dummydata = [
    {
      name: "product A", // name of the product
      quantity: "100", // the current quantity
      predicition: "Lasts till Jan 2024", // Should be in the form "Lasts till Jan 2024"
    },
    {
      name: "product B",
      quantity: "80",
      predicition: "Lasts till Feb 2024",
    },
    {
      name: "product C",
      quantity: "20",
      predicition: "Lasts till Mar 2024",
    },
    {
      name: "product D",
      quantity: "60",
      predicition: "Lasts till Apr 2024",
    },
  ];

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 items-center align-middle place-items-center h-full">
      {dummydata.map((item, index) => {
        //TODO: replace dummydata with data
        return (
          <Card key={index}>
            <Flex>
              <Text>{item.name}</Text>
              <Text>{item.predicition}</Text>
            </Flex>
            <CategoryBar
              values={[40, 30, 20, 10]}
              colors={["rose", "orange", "yellow", "emerald"]}
              markerValue={parseInt(item.quantity)}
              className="mt-3"
            />
          </Card>
        );
      })}
    </div>
  );
};

export default RestockPoint;
