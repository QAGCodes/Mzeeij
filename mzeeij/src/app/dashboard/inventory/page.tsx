import { columns } from "./Columns";
import { InvTable } from "../../../components/InventoryComps/InvTable";
import DashHeader from "@/components/dashboardComps/DashHeader";
import { unstable_noStore } from "next/cache";
import { StockStatus } from "@prisma/client";

export default async function DemoPage() {
  const data = [
    {
      id: 1,
      name: "test",
      brand: "test",
      supplier: "test",
      sku: "test",
      upc: "test",
      quantity: 1,
      price: 2,
      expirydate: new Date(),
      status: StockStatus.IN_STOCK,
    },
    {
      id: 2,
      name: "test",
      brand: "test",
      supplier: "test",
      sku: "test",
      upc: "test",
      quantity: 1,
      price: 1,
      expirydate: new Date(),
      status: StockStatus.OUT_OF_STOCK,
    },
    {
      id: 3,
      name: "test",
      brand: "test",
      supplier: "test",
      sku: "test",
      upc: "test",
      quantity: 1,
      price: 1,
      expirydate: new Date(),
      status: StockStatus.COMING_SOON,
    },
    {
      id: 4,
      name: "test",
      brand: "test",
      supplier: "test",
      sku: "test",
      upc: "test",
      quantity: 1,
      price: 1,
      expirydate: new Date(),
      status: StockStatus.RESTOCK_SOON,
    },
    {
      id: 5,
      name: "test",
      brand: "test",
      supplier: "test",
      sku: "test",
      upc: "test",
      quantity: 1,
      price: 1,
      expirydate: new Date(),
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
