import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Card className="bg-white flex flex-col justify-around items-center w-1/2 h-[80%]">
        <Image
          src={"/logo/nolines-cropped/logo.svg"}
          width={500}
          height={500}
          alt="One8 Logo"
        ></Image>
        <Button className="bg-mzeeij-green rounded p-2 w-10/12">
          <Link href={"/login"} className="w-full h-full">
            Login
          </Link>
        </Button>
      </Card>
    </div>
  );
}
