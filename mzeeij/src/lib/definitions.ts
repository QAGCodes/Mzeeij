import { AnyARecord } from "dns";

export type SimpleStats = {
  orderNum: number;
  returnNum: number;
  itemNum: number;
};

export type Counts = {
  count: number;
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type BestSeller = {
  image: string;
};

export type AdminRow = {
  id: string;
  userId: string;
  accessLevel: string;
};

export type User = {
  id: number | null;
  roleid: number | null;
  firstname: String | undefined;
  lastname: String | undefined;
  username: String | undefined;
  mobile: String | undefined;
  email: String | undefined;
  passwordhash: String | undefined;
  registeredat: string | undefined;
  admin: any | undefined;
  orders: any | undefined;
  role: any | undefined;
};
