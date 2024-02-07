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

import React, { useState, ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import One8Logo from "@/../public/logo/nolines-cropped/logo.svg";

import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
    console.log(`${id} input changed to ${value}`);
  };

  const handleSubmit = async () => {
    router.push("/dashboard/analytics");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="bg-white min-h-[20rem] min-w-[40rem]">
        <CardHeader className="text-center p-4 flex flex-col items-center">
          <CardTitle>
            <Image
              src={One8Logo}
              width={200}
              height={200}
              alt="One8 Logo"
            ></Image>
          </CardTitle>
          <CardDescription>Log in into your Mzeeij Services</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Your username"
                  onInput={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Your Password"
                  onInput={handleChange}
                  type="password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-row justify-around gap-2">
          <Button
            className="bg-mzeeij-blue"
            onClick={() => {
              console.log(formData);
            }}
            asChild
          >
            <Link href={"/admin"}>Admin</Link>
          </Button>
          <Button className="bg-mzeeij-green" onClick={handleSubmit}>
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
