"use client";

import { ColumnDef } from "@tanstack/react-table";

import { MoreHorizontal, ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { OutgoingStatus, OrderStatus } from "@prisma/client";

const StatusCellBadge = ({ value }: any) => {
  if (value === OrderStatus.UNPAID) {
    return (
      <Badge className="bg-red-200 text-red-900 hover:bg-red-200/70">
        Out of Stock
      </Badge>
    );
  } else if (value === OrderStatus.PENDING) {
    return (
      <Badge className="bg-yellow-200 text-yellow-900 hover:bg-yellow-200/70">
        Restock Soon
      </Badge>
    );
  } else if (value === OrderStatus.PAID) {
    return (
      <Badge className="bg-green-200 text-green-900 hover:bg-green-200/70">
        In Stock
      </Badge>
    );
  } else if (value === OrderStatus.COMPLETE) {
    return (
      <Badge className="bg-gray-200 text-gray-500 hover:bg-gray-200/70">
        Discontinued
      </Badge>
    );
  }
};

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "createdat",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "companyname",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Company Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "total",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const unitprice = parseFloat(row.getValue("total"));
      const formatted = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "SAR",
      }).format(unitprice);
      return <div className="text-center">{formatted}</div>;
    },
  },
  {
    accessorKey: "orderstatus",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <StatusCellBadge value={row.getValue("orderstatus")} />;
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
