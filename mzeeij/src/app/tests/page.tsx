import React from "react";

import { fetchSalesByRegion } from "@/lib/data";

const page = async () => {
  const user = {
    userId: 1,
    companyName: "Mzeeijco",
  };
  console.log(await fetchSalesByRegion(user));

  return <div>page</div>;
};

export default page;
