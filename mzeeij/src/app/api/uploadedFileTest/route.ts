import { NextResponse, NextRequest } from "next/server";
import XLSX from "xlsx";
import { writeFile } from "fs/promises";

// This is the object used to interact with our database. Look up
// the Prisma documentation and let me know if you need help with it.
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Parse the Excel file
  const workbook = XLSX.read(buffer, { type: "buffer" });

  // Get the first worksheet
  const worksheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[worksheetName];

  // Convert the worksheet to JSON
  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  console.log(jsonData);

  return NextResponse.json({ success: true });
}
