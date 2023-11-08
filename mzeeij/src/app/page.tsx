import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import LogoName from "@/components/LogoName";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <Card className="bg-white flex flex-col justify-center items-center w-[20rem] h-[20rem] gap-[4rem]">
        <div className="">
          <LogoName />
        </div>
        <div className="">
          <Link href={"/login"} className="bg-slate-400 rounded p-2">
            Login
          </Link>
        </div>
      </Card>
    </div>
  );
}
