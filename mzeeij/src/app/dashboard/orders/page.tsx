import { columns } from "./Columns";
import { InvTable } from "../../../components/InventoryComps/InvTable";
import DashHeader from "@/components/dashboardComps/DashHeader";
import { unstable_noStore as noStore } from "next/cache";

import { OutgoingStatus } from "@prisma/client";

export default async function OrdersPage() {
  const data = [
    {
      id: 1,
      createdat: "17-09-2024",
      fromCompany: "Mzeeijco",
      toCompany: "P&G",
      saleRegion: 10,
      address: "Qiys Ibn Khaldoun Street",
      status: "Preparing",
      type: "INCOMING",
    },
    {
      id: 2,
      createdat: "17-09-2024",
      fromCompany: "Mzeeijco",
      toCompany: "Detol",
      saleRegion: 10,
      address: "Qiys Ibn Khaldoun Street",
      status: "Out for Delivery",
      type: "INCOMING",
    },
    {
      id: 3,
      createdat: "17-09-2024",
      fromCompany: "Mzeeijco",
      toCompany: "Pfizer",
      saleRegion: 10,
      address: "Qiys Ibn Khaldoun Street",
      status: "Delivered",
      type: "INCOMING",
    },
    {
      id: 4,
      createdat: "17-09-2024",
      fromCompany: "Mzeeijco",
      toCompany: "Aramco",
      saleRegion: 10,
      address: "Qiys Ibn Khaldoun Street",
      status: "Accepted",
      type: "OUTGOING",
    },
    {
      id: 5,
      createdat: "17-09-2024",
      fromCompany: "Mzeeijco",
      toCompany: "AlTamimi",
      saleRegion: 10,
      address: "Qiys Ibn Khaldoun Street",
      status: "Returned",
      type: "OUTGOING",
    },
    {
      id: 6,
      createdat: "17-09-2024",
      fromCompany: "Mzeeij",
      toCompany: "PepsiCo",
      saleRegion: 10,
      address: "Qiys Ibn Khaldoun Street",
      status: "Recieved",
      type: "OUTGOING",
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <DashHeader></DashHeader>
      <InvTable columns={columns} data={data} />
    </div>
  );
}
