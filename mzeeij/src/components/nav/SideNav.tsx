// components/SideNav.tsx
"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ExitIcon, GearIcon } from "@radix-ui/react-icons";

const SideNav = () => {
  const router = useRouter(); // Call useRouter at the top level of your component

  const handleLogout = () => {
    // signOut({ callbackUrl: "http://localhost:3000/login" }); // Use the router from the top level in your event handler
    router.push("/login");
  };

  return (
    <div id="navbar" className="text-white flex flex-col w-[15vw]">
      <div
        id="header"
        className="flex flex-col h-[10vh] items-center justify-center my-6"
      >
        <Image
          src={"/logo/nolines-cropped/logo.svg"}
          width={125}
          height={125}
          alt="hi"
        ></Image>
      </div>
      <Separator className="bg-gray-600 w-full justify-start mb-4" />
      <div id="content" className="flex flex-col items-start text-center">
        <Link href={"/dashboard/analytics"} className="w-full">
          <Button variant={"ghost"} className="w-full p-0 text-start">
            Dashboard
          </Button>
        </Link>
        <Link href={"/dashboard/orders"} className="w-full">
          <Button variant={"ghost"} className="w-full p-0 text-start">
            Orders
          </Button>
        </Link>
        <Link href={"/dashboard/inventory"} className="w-full">
          <Button variant={"ghost"} className="w-full p-0 text-start">
            Inventory
          </Button>
        </Link>
        <Link href={"/dashboard/invoices"} className="w-full">
          <Button variant={"ghost"} className="w-full p-0 text-start">
            Invoices
          </Button>
        </Link>
        <Link href={"/dashboard/dataInsertion"} className="w-full">
          <Button variant={"ghost"} className="w-full p-0 text-start">
            Data Insertion
          </Button>
        </Link>
        <Link href={"/dashboard/contact"} className="w-full">
          <Button variant={"ghost"} className="w-full p-0 text-start">
            Contact Us
          </Button>
        </Link>
      </div>
      <div id="footer" className="flex flex-col justify-end flex-grow">
        {/* <div className="justify-start">
        <Link href="/settings">
          <Button className="gap-4 text-white" variant={"link"}>
            <GearIcon />
            Settings
          </Button>
        </Link>
      </div> */}
        <Separator className="bg-gray-600 w-full justify-start"></Separator>
        <div className="flex flex-row justify-around my-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>QG</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center gap-1 overflow-hidden">
            <text className="text-xs font-semibold">Qusai</text>
            <text className="text-xs font-normal text-gray-400">Admin</text>
          </div>
          <div>
            <Button variant="destructive" size="icon" onClick={handleLogout}>
              <ExitIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
