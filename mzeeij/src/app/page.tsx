
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import LogoName from "@/components/LogoName";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen gap-10">
      <LogoName />
      <div className="flex flex-row justify-items-center">
        <Link href={"/login"} className="bg-slate-400 rounded p-2">
          Login
        </Link>
      </div>
    </div>
  );
}
