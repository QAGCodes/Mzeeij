"use client";
import { SessionProvider } from "next-auth/react";
const AuthContext = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return <SessionProvider>{children}</SessionProvider>;
};
export default AuthContext;
