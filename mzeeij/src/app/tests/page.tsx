import React from "react";

import { fetchStatisticsCardData } from "@/lib/data";

const page = async () => {
  const user = {
    userId: 1,
    companyName: "Mzeeij",
  };
  console.log(await fetchStatisticsCardData(user));

  return <div>page</div>;
};

export default page;
