import Image from "next/image";

interface SideNavProps {
  additionalClasses?: string;
}

export default function LogoName({ additionalClasses = "" }: SideNavProps) {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-2 m-4 ${additionalClasses}`}
    >
      <Image
        src={"/mzeeij_logo.webp"}
        alt={"logo"}
        width={"48"}
        height={"48"}
      />
      <h1>Mzeeij</h1>
    </div>
  );
}
