import React from "react";

import { fetchSalesPrediction } from "@/lib/data";

const page = async () => {
  const user = {
    userId: 1,
    companyName: "Mzeeij",
  };
  console.log(await fetchSalesPrediction(user));

  return <div>page</div>;
};

export default page;
