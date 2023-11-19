import { Item, columns } from "./Columns";
import { InvTable } from "../../../components/dashboardComps/InventoryComps/InvTable";
import DashHeader from "@/components/dashboardComps/DashHeader";

async function getData(): Promise<Item[]> {
  // Fetch data from your API here.
  const response = await fetch("https://654a4aefe182221f8d52e825.mockapi.io/items");
  const data = await response.json();

  return data;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DashHeader></DashHeader>
      <InvTable columns={columns} data={data} />
    </div>
  );
}
