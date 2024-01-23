"use client";
import React from "react";

import { Button, Card, Text, Title } from "@tremor/react";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";

import { Input } from "@/components/ui/input";

const ContactUsPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <Card className="m-4">
        <CardHeader>
          <CardTitle>Support Request</CardTitle>
          <CardDescription>
            Please tell us the user ID, your email, and a description of the
            issue you are facing.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">User ID</Label>
            <Input id="name" type="text" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="brand">Email</Label>
            <Input id="brand" type="text" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="amount">Description of Issue</Label>
            <Input id="amount" type="number" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Submit Request</Button>
        </CardFooter>
      </Card>
      <Card className="m-4">
        <Title>Support Contact Info</Title>
        <Text>
          Email:{" "}
          <strong>
            <a href={"mailto:Support@Mzeeij.sa"}>Support@Mzeeij.sa</a>
          </strong>
        </Text>
        <Text>
          Number: <strong>+966512345678</strong>
        </Text>
      </Card>
    </div>
  );
};

export default ContactUsPage;
