import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

import { ExitIcon, GearIcon } from "@radix-ui/react-icons";
import LogoName from "../LogoName";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavContent() {
  return (
    <div className="flex-grow flex flex-col items-start">
      <LogoName />
      <div className="m-4 flex flex-col">
        <Link href={"/analytics"}>
          <Button variant={"ghost"}>Dashboard</Button>
        </Link>
        <Link href={"/invoices"}>
          <Button variant={"ghost"}>Invoices</Button>
        </Link>
        <Link href={"/dataInsertion"}>
          <Button variant={"ghost"}>Data Insertion</Button>
        </Link>
      </div>
    </div>
  );
}
