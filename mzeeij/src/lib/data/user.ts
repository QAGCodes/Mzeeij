import { db } from "@/lib/db";

export function getUser(email: string) {
  return db.users.findUnique({
    where: { email },
  });
}
