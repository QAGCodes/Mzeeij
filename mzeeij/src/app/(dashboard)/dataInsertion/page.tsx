"use client";
import DashHeader from "@/components/dashboardComps/DashHeader";
import UploadZone from "@/components/dashboardComps/InventoryComps/UploadZone";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DataPage() {
  return (
    <div className="flex flex-col mx-3">
      <DashHeader />
      <Tabs defaultValue="batch">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="batch">Batch</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
          <TabsTrigger value="barcode">Barcode/UPC</TabsTrigger>
        </TabsList>
        <TabsContent value="batch">
          <Card>
            <CardHeader>
              <CardTitle>Batch Upload</CardTitle>
              <CardDescription>
                Upload a CSV or Excel file to add new inventory items
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <UploadZone />
            </CardContent>
            <CardFooter>
              <Button>Upload</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="manual">
          <Card>
            <CardHeader>
              <CardTitle>Manual Addition</CardTitle>
              <CardDescription>
                Manually add info of your inventory item
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="brand">Brand</Label>
                <Input id="brand" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" type="number" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="unit">Unit price</Label>
                <Input id="unit" type="number" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="retail">Retail Price</Label>
                <Input id="retail" type="number" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Insert into Inventory</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="barcode">
          <Card>
            <CardHeader>
              <CardTitle>Barcode Addition</CardTitle>
              <CardDescription>Add items based on barcode</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="barcode">Barcode/UPC</Label>
                <Input id="barcode" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" type="number" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Insert into Inventory</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
