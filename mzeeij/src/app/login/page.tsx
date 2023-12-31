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

import React, {
  useState,
  ChangeEvent,
  MouseEventHandler,
  useEffect,
} from "react";
import Link from "next/link";
import Image from "next/image";
import One8Logo from "../../../public/One8_logo.svg";

import { SignInResponse, signIn } from "next-auth/react";

import { useRouter } from "next/navigation";

import { useSession } from "next-auth/react";

const Login = () => {
  const router = useRouter();

  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      router.push("/dashboard/analytics");
    }
  }, [session]);

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
    const { username, password } = formData;
    try {
      const result = await signIn("credentials", {
        ...formData,
        redirect: false,
      }).then((callback) => {
        console.log("hi", callback);
        if (callback?.ok && callback?.status === 200) {
          alert("success signing in");
          router.push("/dashboard/analytics");
        } else {
          alert("error signing in");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="bg-white">
        <CardHeader className="text-center p-4">
          <CardTitle>
            <Image src={One8Logo} width={100} height={100} alt="hi"></Image>
          </CardTitle>
          <CardDescription>Log in into your Mzeeij Services</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">username</Label>
                <Input
                  id="username"
                  placeholder="Your username"
                  onChange={handleChange}
                />
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
        <CardFooter className="flex flex-row justify-around gap-2">
          <Button variant="destructive" asChild>
            <Link href={"/"}>Cancel</Link>
          </Button>
          <Button onClick={handleSubmit}>Sign In</Button>
          <Button
            onClick={() => {
              console.log(formData);
            }}
            asChild
          >
            <Link href={"/admin"}>Admin</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
