import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("credentials:", credentials);
        if (!credentials || !credentials.username || !credentials.password) {
          return null;
        }

        const user = await prisma.users.findUnique({
          where: {
            username: String(credentials.username),
          },
        });
        if (!user) return null;

        if (!bcrypt.compareSync(credentials.password, user.passwordhash))
          return null;

        console.log("credentials:", credentials);
        return { ...user, id: user.id.toString() };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },

  debug: process.env.NODE_ENV === "development",
};
