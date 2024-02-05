"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { StockStatus } from "@prisma/client";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const StatusCellBadge = ({ value }: any) => {
  if (value === StockStatus.OUT_OF_STOCK) {
    return (
      <Badge className="bg-red-200 text-red-900 hover:bg-red-200/70">
        Out of Stock
      </Badge>
    );
  } else if (value === StockStatus.RESTOCK_SOON) {
    return (
      <Badge className="bg-yellow-200 text-yellow-900 hover:bg-yellow-200/70">
        Restock Soon
      </Badge>
    );
  } else if (value === StockStatus.IN_STOCK) {
    return (
      <Badge className="bg-green-200 text-green-900 hover:bg-green-200/70">
        In Stock
      </Badge>
    );
  } else if (value === StockStatus.DISCONTINUED) {
    return (
      <Badge className="bg-gray-200 text-gray-500 hover:bg-gray-200/70">
        Discontinued
      </Badge>
    );
  } else if (value === StockStatus.COMING_SOON) {
    return (
      <Badge className="bg-cyan-200 text-cyan-800 hover:bg-cyan-200/70">
        Coming Soon
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
          id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "brand",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Brand
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "supplier",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Supplier
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "sku",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          SKU
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "upc",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          UPC
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Quantity
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const unitprice = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "SAR",
      }).format(unitprice);
      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    accessorKey: "expirydate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Expiry Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
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
      return <StatusCellBadge value={row.getValue("status")} />;
    },
  },
];
