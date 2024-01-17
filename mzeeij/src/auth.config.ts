import Credentials from "next-auth/providers/credentials";

import type { NextAuthConfig } from "next-auth";
import { users } from "@prisma/client";
import { getUser } from "./lib/data/user";

export default {
  providers: [
    Credentials({
      credentials: {
        username: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        // Might need to use Zod for safety like in the video ---> https://youtu.be/1MTyCvS05V4?t=9587
        const username: string = credentials.username;
        const password: string = credentials.password;

        const user = getUser(username);

        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
