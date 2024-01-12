const { db } = require("@vercel/postgres");
const data = require("../src/lib/seedData.js")();
const bcrypt = require("bcrypt");

async function seedCompany(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Insert data into the "company" table
    const insertedCompany = await Promise.all(
      data.company.map(
        (company) => client.sql`
                INSERT INTO company (CompanyName, CRnum, registeredat)
                VALUES (${company.CompanyName}, ${company.CRnum}, ${company.registeredat});
            `
      )
    );

    console.log(`Seeded ${insertedCompany.length} companies`);
  } catch (error) {
    console.error("Error seeding companies:", error);
    throw error;
  }
}

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      data.users.map(
        (user) => client.sql`
                INSERT INTO users (CompanyName, firstname, lastname, username, mobile, email, passwordhash, registeredat, role)
                VALUES (${user.CompanyName}, ${user.firstname}, ${user.lastname}, ${user.username}, ${user.mobile}, ${user.email}, ${user.passwordhash}, ${user.registeredat}, ${user.role});
            `
      )
    );

    console.log(`Seeded ${insertedUsers.length} users`);
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedSupplier(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Insert data into the "supplier" table
    const insertedSupplier = await Promise.all(
      data.supplier.map(
        (supplier) => client.sql`
                INSERT INTO supplier (name, phonenumber, address, email)
                VALUES (${supplier.name}, ${supplier.phonenumber}, ${supplier.address}, ${supplier.email});
            `
      )
    );

    console.log(`Seeded ${insertedSupplier.length} supplier`);
  } catch (error) {
    console.error("Error seeding supplier:", error);
    throw error;
  }
}

async function seedSupplierCompany(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Insert data into the "SupplierCompany" table
    const insertedSupplierCompany = await Promise.all(
      data.supplierCompanies.map(
        (supplierCompany) => client.sql`
                INSERT INTO SupplierCompany (supplierId, companyName)
                VALUES (${supplierCompany.supplierId}, ${supplierCompany.companyName});
            `
      )
    );

    console.log(`Seeded ${insertedSupplierCompany.length} supplier companies`);
  } catch (error) {
    console.error("Error seeding supplier companies:", error);
    throw error;
  }
}

async function seedOrders(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Insert data into the "orders" table
    const insertedOrders = await Promise.all(
      data.orders.map(
        (order) => client.sql`
                    INSERT INTO orders (CompanyName, userid, type, status, createdat)
                    VALUES (${order.CompanyName}, ${order.userid}, ${order.type}, ${order.status}, ${order.createdat});
                `
      )
    );

    console.log(`Seeded ${insertedOrders.length} orders`);
  } catch (error) {
    console.error("Error seeding orders:", error);
    throw error;
  }
}

async function seedMetaProduct(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Insert data into the "Meta_product" table
    const insertedMetaProduct = await Promise.all(
      data.Meta_product.map(
        (metaProduct) => client.sql`
                    INSERT INTO Meta_product (CompanyName, supplierid, title, summary, sku, upc, price, createdat, updatedat, estimatedExp, StockStatus)
                    VALUES (${metaProduct.CompanyName}, ${metaProduct.supplierid}, ${metaProduct.title}, ${metaProduct.summary}, ${metaProduct.sku}, ${metaProduct.upc}, ${metaProduct.price}, ${metaProduct.createdat}, ${metaProduct.updatedat}, ${metaProduct.estimatedExp}, ${metaProduct.StockStatus});
                `
      )
    );

    console.log(`Seeded ${insertedMetaProduct.length} Meta_product`);
  } catch (error) {
    console.error("Error seeding Meta_product:", error);
    throw error;
  }
}

async function seedItem(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Insert data into the "item" table
    const insertedItem = await Promise.all(
      data.item.map(
        (item) => client.sql`
                    INSERT INTO item (Metaid, orderid, insertedat, removedat, location, Expiredate)
                    VALUES (${item.Metaid}, ${item.orderid}, ${item.insertedat}, ${item.removedat}, ${item.location}, ${item.Expiredate});
                `
      )
    );

    console.log(`Seeded ${insertedItem.length} item`);
  } catch (error) {
    console.error("Error seeding item:", error);
    throw error;
  }
}

async function seedInvoice(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Insert data into the "invoice" table
    const insertedInvoice = await Promise.all(
      data.invoice.map(
        (invoice) => client.sql`
                    INSERT INTO invoice (orderid, subtotal, metaproductdiscount, tax, shipping, total, promo, discount, grandtotal, createdat)
                    VALUES (${invoice.orderid}, ${invoice.subtotal}, ${invoice.metaproductdiscount}, ${invoice.tax}, ${invoice.shipping}, ${invoice.total}, ${invoice.promo}, ${invoice.discount}, ${invoice.grandtotal}, ${invoice.createdat});
                `
      )
    );

    console.log(`Seeded ${insertedInvoice.length} invoice`);
  } catch (error) {
    console.error("Error seeding invoice:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  try {
    await client.sql`BEGIN TRANSACTION;`;

    await seedCompany(client);
    await seedSupplier(client);
    await seedUsers(client);
    await seedMetaProduct(client);
    await seedOrders(client);
    await seedItem(client);
    await seedInvoice(client);
    await seedSupplierCompany(client);

    await client.sql`COMMIT;`;
  } catch (error) {
    await client.sql`ROLLBACK;`;
    throw error;
  } finally {
    client.release();
  }

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
