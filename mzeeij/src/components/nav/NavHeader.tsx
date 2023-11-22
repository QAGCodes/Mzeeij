import React from "react";

import LogoName from "../LogoName";

import Image from "next/image";

const NavHeader = () => {
  return (
    <div className="flex flex-col h-[10vh] items-center justify-center my-6">
      <Image src={"/One8_logo.svg"} width={125} height={125} alt="hi"></Image>
    </div>
  );
};

export default NavHeader;
