import { columns } from "./Columns";
import { InvTable } from "../../../components/InventoryComps/InvTable";
import DashHeader from "@/components/dashboardComps/DashHeader";
import { unstable_noStore as noStore } from "next/cache";

import { OutgoingStatus, OrderStatus } from "@prisma/client";

export default async function InvoicesPage() {
  const data = [
    {
      id: 1,
      createdat: new Date("2022-01-01").toLocaleDateString("en-GB"),
      companyname: "ABC Corp",
      total: 5000,
      orderstatus: "Complete",
    },
    {
      id: 2,
      createdat: new Date("2022-02-15").toLocaleDateString("en-GB"),
      companyname: "XYZ Ltd",
      total: 3000,
      orderstatus: "Unpaid",
    },
    {
      id: 3,
      createdat: new Date("2022-03-10").toLocaleDateString("en-GB"),
      companyname: "123 Industries",
      total: 7000,
      orderstatus: "Pending",
    },
    {
      id: 4,
      createdat: new Date("2022-04-05").toLocaleDateString("en-GB"),
      companyname: "789 Enterprises",
      total: 4500,
      orderstatus: "Paid",
    },
    {
      id: 5,
      createdat: new Date("2022-05-20").toLocaleDateString("en-GB"),
      companyname: "456 Solutions",
      total: 6000,
      orderstatus: "Complete",
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <DashHeader></DashHeader>
      <InvTable columns={columns} data={data} />
    </div>
  );
}
