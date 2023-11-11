import sqlite3
from faker import Faker

# Create a Faker instance
fake = Faker()

# Connect to the SQLite database
conn = sqlite3.connect('test1.db')
c = conn.cursor()

# Define the number of records to generate for each table
num_records = 100

# Generate mock data for the 'user' table
for _ in range(num_records):
    c.execute("INSERT INTO user (roleId, firstName, lastName, username, mobile, email, passwordHash, registeredAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
              (1, fake.first_name(), fake.last_name(), fake.user_name(), fake.phone_number(), fake.email(), fake.sha256(), fake.date_time_this_decade()))

# Generate mock data for the 'product' table
for _ in range(num_records):
    c.execute("INSERT INTO product (supplierId, orderId, title, summary, type, sku, createdAt, updatedAt, content) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
              (1, 1, fake.catch_phrase(), fake.text(), 0, fake.bothify(text='???-####'), fake.date_time_this_decade(), fake.date_time_this_decade(), fake.text()))

# Generate mock data for the 'category' table
for _ in range(num_records):
    c.execute("INSERT INTO category (MetaProductId, title, metaTitle, slug, content) VALUES (?, ?, ?, ?, ?)",
              (1, fake.catch_phrase(), fake.catch_phrase(), fake.slug(), fake.text()))

# Generate mock data for the 'order' table
for _ in range(num_records):
    c.execute("INSERT INTO orders (userId, type, status, subTotal, MetaProductDiscount, tax, shipping, total, promo, discount, grandTotal, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
              (1, 0, 0, fake.random_number(digits=3), fake.random_number(digits=2), fake.random_number(digits=2), fake.random_number(digits=2), fake.random_number(digits=3), fake.catch_phrase(), fake.random_number(digits=2), fake.random_number(digits=3), fake.date_time_this_decade()))

# Commit the changes and close the connection
conn.commit()
conn.close()