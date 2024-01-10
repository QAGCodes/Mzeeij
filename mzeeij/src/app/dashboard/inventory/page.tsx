import { Item, columns } from "./Columns";
import { InvTable } from "../../../components/InventoryComps/InvTable";
import DashHeader from "@/components/dashboardComps/DashHeader";
import { unstable_noStore } from "next/cache";

async function getData(): Promise<Item[]> {
  unstable_noStore();
  // Fetch data from your API here.
  const response = await fetch(
    "https://654a4aefe182221f8d52e825.mockapi.io/items"
  );
  const data = await response.json();

  console.log(data);

  return data;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="flex flex-col h-full">
      <DashHeader></DashHeader>
      <InvTable columns={columns} data={data} />
    </div>
  );
}
