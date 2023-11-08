import Image from "next/image";

interface SideNavProps {
  additionalClasses?: string;
}

export default function LogoName({ additionalClasses = "" }: SideNavProps) {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-1 ${additionalClasses}`}
    >
      <Image
        src={"/mzeeij_logo.webp"}
        alt={"logo"}
        width={"48"}
        height={"48"}
      />
      <h1>One8</h1>
    </div>
  );
}
