import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen gap-10">
      <Image
        src={"logo/nolines-cropped/logo.svg"}
        width={500}
        height={500}
        alt="One8 Logo"
      ></Image>
      <Button className="bg-mzeeij-green text-white rounded w-[6rem] h-[3rem] hover:bg-mzeeij-green/70">
        <Link href={"/login"}>Login</Link>
      </Button>
    </div>
  );
}
