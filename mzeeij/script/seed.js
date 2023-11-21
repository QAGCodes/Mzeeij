const { db } = require('@vercel/postgres');
const pgp = require('pg-promise')();
const fs = require('fs');
const path = require('../src/lib/inventory.sql');
const faker = require('faker');
const getPlaceholderData = require('../src/lib/placeholder-data');

// Function to read the SQL file
function readSqlFile(file) {
  const fullPath = path.join(__dirname, file);
  return new Promise((resolve, reject) => {
    fs.readFile(fullPath, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

// Function to execute the SQL file
async function executeSqlFile(db, file) {
  const data = await readSqlFile(file);
  return db.none(data);
}

// Function to seed the database
async function seedDatabase() {

  try {
    await executeSqlFile(db, 'inventory.sql');
    console.log('Database seeded!');
  } catch (err) {
    console.error('Error seeding database', err);
  } finally {
    pgp.end();
  }
}

async function seedfakeData() {
  const data = getPlaceholderData();
  const client = await db.connect();

  try {
    await client.query('BEGIN');
    await Promise.all(
      Object.keys(data).map((table) => {
        const rows = data[table];
        const columns = Object.keys(rows[0]);
        const query = pgp.helpers.insert(rows, columns, table);
        return client.query(query);
      }),
    );
    await client.query('COMMIT');
    console.log('Fake data seeded!');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error seeding fake data', err);
  } finally {
    client.release();
    pgp.end();
  }
}

async function main() {
  const client = await db.connect();

  await seedDatabase(client);
  await seedfakeData(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
