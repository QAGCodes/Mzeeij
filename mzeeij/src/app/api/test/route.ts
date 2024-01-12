// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
//  A simple GET Example

import { StockStatus } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(Request: any) {
  const data = [
    {
      id: 1,
      name: "test",
      brand: "test",
      supplier: "test",
      sku: "test",
      upc: "test",
      quantity: 1,
      price: 1,
      expirydate: Date.now(),
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
      expirydate: Date.now(),
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
      expirydate: Date.now(),
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
      expirydate: Date.now(),
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
      expirydate: Date.now(),
      status: StockStatus.DISCONTINUED,
    },
  ];

  return NextResponse.json(data);
}
