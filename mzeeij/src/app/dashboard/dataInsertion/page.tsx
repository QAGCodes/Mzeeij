"use client";
import DashHeader from "@/components/dashboardComps/DashHeader";
import UploadZone from "@/components/InventoryComps/UploadZone";
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
    <div className="flex flex-col mx-3 mb-3">
      <DashHeader />
      <Tabs defaultValue="manual">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="manual">Manual</TabsTrigger>
          <TabsTrigger value="barcode">Barcode/UPC</TabsTrigger>
          <TabsTrigger value="batch">Batch</TabsTrigger>
        </TabsList>
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
                <Label htmlFor="name">Product Name</Label>
                <Input id="name" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="brand">Manufacturer Name</Label>
                <Input id="brand" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="supplier">Supplier Name</Label>
                <Input id="supplier" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="sku">SKU</Label>
                <Input id="sku" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="upc">UPC</Label>
                <Input id="upc" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="price">Price</Label>
                <Input id="price" type="number" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="expiry">Estimated Expiry</Label>
                <Input id="expiry" type="date" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="restock">Restock Point</Label>
                <Input id="restock" type="number" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-mzeeij-green">Insert into Inventory</Button>
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
              <Button className="bg-mzeeij-green">Insert into Inventory</Button>
            </CardFooter>
          </Card>
        </TabsContent>
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
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
