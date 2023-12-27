// This is the object used to interact with our database. Look up
// the Prisma documentation and let me know if you need help with it.
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default prisma;
