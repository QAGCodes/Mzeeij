import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { ExitIcon, GearIcon } from "@radix-ui/react-icons";
import { Separator } from "../ui/separator";

import { useRouter } from "next/navigation";

export default function NavFooter() {
  const router = useRouter(); // Call useRouter at the top level of your component

  const handleLogout = () => {
    router.push("/login"); // Use the router from the top level in your event handler
  };

  return (
    <div className="flex flex-col justify-end flex-grow">
      <div className="justify-start m-4">
        <Button>
          <GearIcon />
          settings
        </Button>
        <Separator className="bg-gray-600"></Separator>
      </div>
      <div className="flex flex-row gap-3 justify-evenly">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>QG</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <div>Qusai</div>
          <div>Admin</div>
        </div>
        <div>
          <Button variant={"destructive"} onClick={handleLogout}>
            <ExitIcon />
            logout
          </Button>
        </div>
      </div>
    </div>
  );
}
