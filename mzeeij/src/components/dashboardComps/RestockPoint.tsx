"use client";
import { Card, CategoryBar, Flex, Text } from "@tremor/react";

// const chartdata3 = [
//   {
//     date: "Jan 23",
//     "Distance Running": 167,
//     "Road Cycling": 145,
//     "Open Water Swimming": 135,
//     "Hatha Yoga": 115,
//     "Street Basketball": 150,
//   },
//   {
//     date: "Feb 23",
//     "Distance Running": 125,
//     "Road Cycling": 110,
//     "Open Water Swimming": 155,
//     "Hatha Yoga": 85,
//     "Street Basketball": 180,
//   },
//   {
//     date: "Mar 23",
//     "Distance Running": 156,
//     "Road Cycling": 149,
//     "Open Water Swimming": 145,
//     "Hatha Yoga": 90,
//     "Street Basketball": 130,
//   },
//   {
//     date: "Apr 23",
//     "Distance Running": 165,
//     "Road Cycling": 112,
//     "Open Water Swimming": 125,
//     "Hatha Yoga": 105,
//     "Street Basketball": 170,
//   },
//   {
//     date: "May 23",
//     "Distance Running": 153,
//     "Road Cycling": 138,
//     "Open Water Swimming": 165,
//     "Hatha Yoga": 100,
//     "Street Basketball": 110,
//   },
//   {
//     date: "Jun 23",
//     "Distance Running": 124,
//     "Road Cycling": 145,
//     "Open Water Swimming": 175,
//     "Hatha Yoga": 75,
//     "Street Basketball": 140,
//   },
// ];

const RestockPoint = ({ data }: { data: Array<Object> }) => {
  console.log(data);

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 items-center align-middle place-items-center h-full">
      <Card className="">
        <Flex>
          <Text>Product A Quantity</Text>
          <Text>62%</Text>
        </Flex>
        <CategoryBar
          values={[40, 30, 20, 10]}
          colors={["rose", "orange", "yellow", "emerald"]}
          markerValue={62}
          className="mt-3"
        />
      </Card>
      <Card className="">
        <Flex>
          <Text>Product B Quantity</Text>
          <Text>24%</Text>
        </Flex>
        <CategoryBar
          values={[40, 30, 20, 10]}
          colors={["rose", "orange", "yellow", "emerald"]}
          markerValue={24}
          className="mt-3"
        />
      </Card>
      <Card className="">
        <Flex>
          <Text>Product C Quantity</Text>
          <Text>99%</Text>
        </Flex>
        <CategoryBar
          values={[40, 30, 20, 10]}
          colors={["rose", "orange", "yellow", "emerald"]}
          markerValue={99}
          className="mt-3"
        />
      </Card>
      <Card className="">
        <Flex>
          <Text>Product D Quantity</Text>
          <Text>5%</Text>
        </Flex>
        <CategoryBar
          values={[40, 30, 20, 10]}
          colors={["rose", "orange", "yellow", "emerald"]}
          markerValue={5}
          className="mt-3"
        />
      </Card>
    </div>
  );
};

export default RestockPoint;
