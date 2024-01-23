import { columns } from "./Columns";
import { InvTable } from "../../../components/InventoryComps/InvTable";
import DashHeader from "@/components/dashboardComps/DashHeader";
import { unstable_noStore } from "next/cache";
import { StockStatus } from "@prisma/client";

export default async function DemoPage() {
  const data = [
    {
      id: 1,
      name: "Organic Apples",
      brand: "Healthy Foods",
      supplier: "Healthy Foods Inc.",
      sku: "ORG_APP",
      upc: "123456789012",
      quantity: 200,
      price: 1.99,
      expirydate: new Date("2023-12-31").toLocaleDateString("en-GB"),
      status: StockStatus.IN_STOCK,
    },
    {
      id: 2,
      name: "Whole Grain Bread",
      brand: "Bakery Delights",
      supplier: "Bakery Delights Inc.",
      sku: "WG_BREAD",
      upc: "234567890123",
      quantity: 150,
      price: 2.99,
      expirydate: new Date("2023-11-30").toLocaleDateString("en-GB"),
      status: StockStatus.OUT_OF_STOCK,
    },
    {
      id: 3,
      name: "Organic Milk",
      brand: "Dairy Fresh",
      supplier: "Dairy Fresh LLC",
      sku: "ORG_MILK",
      upc: "345678901234",
      quantity: 100,
      price: 3.99,
      expirydate: new Date("2023-10-31").toLocaleDateString("en-GB"),
      status: StockStatus.COMING_SOON,
    },
    {
      id: 4,
      name: "Free Range Eggs",
      brand: "Farm Fresh",
      supplier: "Farm Fresh Ltd.",
      sku: "FR_EGGS",
      upc: "456789012345",
      quantity: 250,
      price: 4.99,
      expirydate: new Date("2023-09-30").toLocaleDateString("en-GB"),
      status: StockStatus.RESTOCK_SOON,
    },
    {
      id: 5,
      name: "Organic Honey",
      brand: "Sweet Natural",
      supplier: "Sweet Natural Co.",
      sku: "ORG_HONEY",
      upc: "567890123456",
      quantity: 75,
      price: 7.99,
      expirydate: new Date("2023-08-31").toLocaleDateString("en-GB"),
      status: StockStatus.DISCONTINUED,
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <DashHeader></DashHeader>
      <InvTable columns={columns} data={data} />
    </div>
  );
}
