
CREATE TABLE role (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

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



CREATE TABLE supplier (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  contact TEXT,
  address TEXT
);

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



CREATE TABLE inventory (
  id SERIAL PRIMARY KEY,
  productId INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  FOREIGN KEY (productId) REFERENCES product (id)
);

CREATE TABLE orderItem (
  id SERIAL PRIMARY KEY,
  orderId INTEGER NOT NULL,
  productId INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  FOREIGN KEY (orderId) REFERENCES orders (id),
  FOREIGN KEY (productId) REFERENCES product (id)
);

CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  productId INTEGER,
  title TEXT NOT NULL,
  metaTitle TEXT,
  slug TEXT NOT NULL,
  content TEXT,
  FOREIGN KEY (productId) REFERENCES product (id)
);

CREATE TABLE admin (
  id SERIAL PRIMARY KEY,
  userId INTEGER NOT NULL,
  accessLevel INTEGER NOT NULL,
  FOREIGN KEY (userId) REFERENCES users (id)
);
