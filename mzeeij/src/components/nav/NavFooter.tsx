import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { ExitIcon, GearIcon } from "@radix-ui/react-icons";
import { Separator } from "../ui/separator";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavFooter() {
  const router = useRouter(); // Call useRouter at the top level of your component

  const handleLogout = () => {
    router.push("/login"); // Use the router from the top level in your event handler
  };

  return (
    <div className="flex flex-col justify-end flex-grow">
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
  );
}
