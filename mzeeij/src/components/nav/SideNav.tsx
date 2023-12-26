// components/SideNav.tsx
"use client";

import LogoName from "../misc/LogoName";
import { Button } from "../ui/button";
import NavContent from "./NavContent";
import NavFooter from "./NavFooter";
import { Separator } from "@/components/ui/separator";
import NavHeader from "./NavHeader";

const SideNav = () => {
  return (
    <div className="text-white flex flex-col w-[15vw]">
      <NavHeader></NavHeader>
      <Separator className="bg-gray-600 w-full justify-start mb-4" />
      <NavContent></NavContent>
      <NavFooter></NavFooter>
    </div>
  );
};

export default SideNav;
