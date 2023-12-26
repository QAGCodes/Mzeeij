const { db } = require("@vercel/postgres");
const data = require("@/lib/seedData")();
const bcrypt = require("bcrypt");

async function createTables(client: any) {
  try {
    await client.sql`drop table if exists role, users, supplier, orders, product, inventory, orderItem, category, admin cascade`;

    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const roleTable = await client.sql`
CREATE TABLE role (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);
    `;
    const usersTable = await client.sql`
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  roleId INTEGER NOT NULL,
  firstName TEXT,
  lastName TEXT,
  username TEXT UNIQUE,
  mobile TEXT UNIQUE,
  email TEXT UNIQUE,
  passwordHash TEXT NOT NULL,
  registeredAt TIMESTAMP NOT NULL,
  FOREIGN KEY (roleId) REFERENCES role (id)
);
    `;

    const supplierTable = await client.sql`
      CREATE TABLE supplier (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  contact TEXT,
  address TEXT
      );
    `;

    const ordersTable = await client.sql`
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  userId INTEGER NOT NULL,
  type INTEGER NOT NULL DEFAULT 0,
  status INTEGER NOT NULL DEFAULT 0,
  subTotal REAL NOT NULL DEFAULT 0,
  MetaProductDiscount REAL NOT NULL DEFAULT 0,
  tax REAL NOT NULL DEFAULT 0,
  shipping REAL NOT NULL DEFAULT 0,
  total REAL NOT NULL DEFAULT 0,
  promo TEXT,
  discount REAL NOT NULL DEFAULT 0,
  grandTotal REAL NOT NULL DEFAULT 0,
  createdAt TIMESTAMP NOT NULL,
  FOREIGN KEY (userId) REFERENCES users (id)
);
    `;

    const productTable = await client.sql`
CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  supplierId INTEGER NOT NULL,
  orderId INTEGER,
  title TEXT NOT NULL,
  summary TEXT,
  type INTEGER NOT NULL DEFAULT 0,
  sku TEXT NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP,
  content TEXT,
  FOREIGN KEY (supplierId) REFERENCES supplier (id),
  FOREIGN KEY (orderId) REFERENCES orders (id)
);
    `;

    const inventoryTable = await client.sql`
CREATE TABLE inventory (
  id SERIAL PRIMARY KEY,
  productId INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  FOREIGN KEY (productId) REFERENCES product (id)
);
    `;

    const orderItemTable = await client.sql`
CREATE TABLE orderItem (
  id SERIAL PRIMARY KEY,
  orderId INTEGER NOT NULL,
  productId INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  FOREIGN KEY (orderId) REFERENCES orders (id),
  FOREIGN KEY (productId) REFERENCES product (id)
);
    `;

    const categoryTable = await client.sql`
CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  productId INTEGER,
  title TEXT NOT NULL,
  metaTitle TEXT,
  slug TEXT NOT NULL,
  content TEXT,
  FOREIGN KEY (productId) REFERENCES product (id)
);
    `;

    const adminTable = await client.sql`
CREATE TABLE admin (
  id SERIAL PRIMARY KEY,
  userId INTEGER NOT NULL,
  accessLevel INTEGER NOT NULL,
  FOREIGN KEY (userId) REFERENCES users (id)
);
    `;

    console.log(`Created "users" table`);
  } catch (error) {
    console.error("Error creating tables:", error);
    throw error;
  }
}

async function seedRole(client: any) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Insert data into the "role" table
    const insertedRole = await Promise.all(
      data.role.map(
        (role: any) => client.sql`
            INSERT INTO role (name)
            VALUES (${role.name});
        `
      )
    );

    console.log(`Seeded ${insertedRole.length} role`);
  } catch (error) {
    console.error("Error seeding role:", error);
    throw error;
  }
}

async function seedUsers(client: any) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      data.users.map(
        (user: any) => client.sql`
                INSERT INTO users (roleId, firstName, lastName, username, mobile, email, passwordHash, registeredAt)
                VALUES (${user.roleId}, ${user.firstName}, ${user.lastName}, ${user.username}, ${user.mobile}, ${user.email}, ${user.passwordHash}, ${user.registeredAt});
            `
      )
    );

    console.log(`Seeded ${insertedUsers.length} users`);
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedSupplier(client: any) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Insert data into the "supplier" table
    const insertedSupplier = await Promise.all(
      data.supplier.map(
        (supplier: any) => client.sql`
                INSERT INTO supplier (name, contact, address)
                VALUES (${supplier.name}, ${supplier.contact}, ${supplier.address});
            `
      )
    );

    console.log(`Seeded ${insertedSupplier.length} supplier`);
  } catch (error) {
    console.error("Error seeding supplier:", error);
    throw error;
  }
}

async function seedOrders(client: any) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Insert data into the "orders" table
    const insertedOrders = await Promise.all(
      data.orders.map(
        (order: any) => client.sql`
                    INSERT INTO orders (userId, type, status, subTotal, MetaProductDiscount, tax, shipping, total, promo, discount, grandTotal, createdAt)
                    VALUES (${order.userId}, ${order.type}, ${order.status}, ${order.subTotal}, ${order.MetaProductDiscount}, ${order.tax}, ${order.shipping}, ${order.total}, ${order.promo}, ${order.discount}, ${order.grandTotal}, ${order.createdAt});
                `
      )
    );

    console.log(`Seeded ${insertedOrders.length} orders`);
  } catch (error) {
    console.error("Error seeding orders:", error);
    throw error;
  }
}

async function seedProduct(client: any) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Insert data into the "product" table
    const insertedProduct = await Promise.all(
      data.product.map(
        (product: any) => client.sql`
                    INSERT INTO product (supplierId, orderId, title, summary, type, sku, createdAt, updatedAt, content)
                    VALUES (${product.supplierId}, ${product.orderId}, ${product.title}, ${product.summary}, ${product.type}, ${product.sku}, ${product.createdAt}, ${product.updatedAt}, ${product.content});
                `
      )
    );

    console.log(`Seeded ${insertedProduct.length} product`);
  } catch (error) {
    console.error("Error seeding product:", error);
    throw error;
  }
}

async function seedInventory(client: any) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Insert data into the "inventory" table
    const insertedInventory = await Promise.all(
      data.inventory.map(
        (inventory: any) => client.sql`
                    INSERT INTO inventory (productId, quantity)
                    VALUES (${inventory.productId}, ${inventory.quantity});
                `
      )
    );

    console.log(`Seeded ${insertedInventory.length} inventory`);
  } catch (error) {
    console.error("Error seeding inventory:", error);
    throw error;
  }
}

async function seedOrderItem(client: any) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Insert data into the "orderItem" table
    const insertedOrderItem = await Promise.all(
      data.orderItem.map(
        (orderItem: any) => client.sql`
                    INSERT INTO orderItem (orderId, productId, quantity)
                    VALUES (${orderItem.orderId}, ${orderItem.productId}, ${orderItem.quantity});
                `
      )
    );

    console.log(`Seeded ${insertedOrderItem.length} orderItem`);
  } catch (error) {
    console.error("Error seeding orderItem:", error);
    throw error;
  }
}

async function seedCategory(client: any) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Insert data into the "category" table
    const insertedCategory = await Promise.all(
      data.category.map(
        (category: any) => client.sql`
                    INSERT INTO category (productId, title, metaTitle, slug, content)
                    VALUES (${category.productId}, ${category.title}, ${category.metaTitle}, ${category.slug}, ${category.content});
                `
      )
    );

    console.log(`Seeded ${insertedCategory.length} category`);
  } catch (error) {
    console.error("Error seeding category:", error);
    throw error;
  }
}

async function seedAdmin(client: any) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Insert data into the "admin" table
    const insertedAdmin = await Promise.all(
      data.admin.map(
        (admin: any) => client.sql`
                    INSERT INTO admin (userId, accessLevel)
                    VALUES (${admin.userId}, ${admin.accessLevel});
                `
      )
    );

    console.log(`Seeded ${insertedAdmin.length} admin`);
  } catch (error) {
    console.error("Error seeding admin:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await createTables(client);
  await seedRole(client);
  await seedUsers(client);
  await seedSupplier(client);
  await seedOrders(client);
  await seedProduct(client);
  await seedInventory(client);
  await seedOrderItem(client);
  await seedCategory(client);
  await seedAdmin(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
