const { db } = require("@vercel/postgres");
const bcrypt = require("bcryptjs");

async function createUser(client) {
  try {
    const addedUser = {
      roleId: 1,
      firstName: "test",
      lastName: "test",
      username: "test1",
      mobile: "test",
      email: "test@test.com",
      passwordHash: await bcrypt.hash("test", 10),
      registeredAt: new Date(),
    };
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Insert data into the "users" table
    const insertedUsers = await client.sql`
                INSERT INTO users (roleId, firstName, lastName, username, mobile, email, passwordHash, registeredAt)
                VALUES (${addedUser.roleId}, ${addedUser.firstName}, ${addedUser.lastName}, ${addedUser.username}, ${addedUser.mobile}, ${addedUser.email}, ${addedUser.passwordHash}, ${addedUser.registeredAt});
            `;

    console.log(`Seeded user success`);
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function addUsers() {
  const client = await db.connect();

  await createUser(client);

  await client.end();
}

addUsers().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
