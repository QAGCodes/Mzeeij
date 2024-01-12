import { columns } from "./Columns";
import { InvTable } from "../../../components/InventoryComps/InvTable";
import DashHeader from "@/components/dashboardComps/DashHeader";
import { unstable_noStore as noStore } from "next/cache";

import { OutgoingStatus, OrderStatus } from "@prisma/client";

export default async function InvoicesPage() {
  const data = [
    {
      id: 1,
      createdat: new Date(),
      companyname: "test",
      total: 10,
      orderstatus: OrderStatus.COMPLETE,
      type: OutgoingStatus.INCOMING,
    },
    {
      id: 2,
      createdat: new Date(),
      companyname: "test",
      total: 10,
      orderstatus: OrderStatus.PAID,
      type: OutgoingStatus.INCOMING,
    },
    {
      id: 3,
      createdat: new Date(),
      companyname: "test",
      total: 10,
      orderstatus: OrderStatus.PENDING,
      type: OutgoingStatus.OUTGOING,
    },
    {
      id: 4,
      createdat: new Date(),
      companyname: "test",
      total: 10,
      orderstatus: OrderStatus.UNPAID,
      type: OutgoingStatus.OUTGOING,
    },
    {
      id: 5,
      createdat: new Date(),
      companyname: "test",
      total: 10,
      orderstatus: OrderStatus.COMPLETE,
      type: OutgoingStatus.RETURN,
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <DashHeader></DashHeader>
      <InvTable columns={columns} data={data} />
    </div>
  );
}
