"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LogoName from "@/components/LogoName";

import React from "react";
import { useState, ChangeEvent } from "react";
import Link from "next/link";

interface Credentials {
  id: string;
  password: string;
}

const Login = () => {
  const [crednetials, setCredentials] = useState<Credentials>({
    id: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setCredentials(
      (prevCredentials) =>
        ({
          ...prevCredentials,
          [id]: value,
        } as Pick<Credentials, keyof Credentials>)
    ); // Type assertion
    console.log(`${id} input changed to ${value}`);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="bg-white">
        <CardHeader className="text-center p-4">
          <CardTitle>
            <LogoName />
          </CardTitle>
          <CardDescription>Log in into your Mzeeij Services</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="id">ID</Label>
                <Input id="id" placeholder="Your ID" onChange={handleChange} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Your Password"
                  onChange={handleChange}
                  type="password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-row justify-around">
          <Button variant="destructive" asChild>
            <Link href={"/"}>Cancel</Link>
          </Button>
          <Button
            onClick={() => {
              console.log(crednetials);
            }}
            asChild
          >
            <Link href={"/analytics"}>Sign In</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
