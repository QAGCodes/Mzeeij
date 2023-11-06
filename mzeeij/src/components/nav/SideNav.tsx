// components/SideNav.tsx
"use client";

import LogoName from "../LogoName";
import { Button } from "../ui/button";
import NavContent from "./NavContent";
import NavFooter from "./NavFooter";
import { Separator } from "@/components/ui/separator";

const SideNav = () => {
  return (
    <div className=" text-white flex flex-col">
      <NavContent></NavContent>
      <NavFooter></NavFooter>
    </div>
  );
};

export default SideNav;
