import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

import { ExitIcon, GearIcon } from "@radix-ui/react-icons";
import LogoName from "../LogoName";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import Link from "next/link";

//TODO: Style the buttons

export default function NavContent() {
  return (
    <div className="flex flex-col items-start text-center">
      <Link href={"/analytics"} className="w-full">
        <Button variant={"ghost"} className="w-full p-0 text-start">
          Dashboard
        </Button>
      </Link>
      <Link href={"/inventory"} className="w-full">
        <Button variant={"ghost"} className="w-full p-0 text-start">
          Inventory
        </Button>
      </Link>
      <Link href={"/invoices"} className="w-full">
        <Button variant={"ghost"} className="w-full p-0 text-start">
          Invoices
        </Button>
      </Link>
      <Link href={"/dataInsertion"} className="w-full">
        <Button variant={"ghost"} className="w-full p-0 text-start">
          Data Insertion
        </Button>
      </Link>
    </div>
  );
}
