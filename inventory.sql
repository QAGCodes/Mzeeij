DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  `roleId` INTEGER NOT NULL,
  `firstName` TEXT DEFAULT NULL,
  `lastName` TEXT DEFAULT NULL,
  `username` TEXT UNIQUE,
  `mobile` TEXT UNIQUE,
  `email` TEXT UNIQUE,
  `passwordHash` TEXT NOT NULL,
  `registeredAt` TEXT NOT NULL
);

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  `supplierId` INTEGER NOT NULL,
  `orderId` INTEGER,
  `title` TEXT NOT NULL,
  `summary` TEXT,
  `type` INTEGER NOT NULL DEFAULT 0,
  `sku` TEXT NOT NULL,
  `createdAt` TEXT NOT NULL,
  `updatedAt` TEXT DEFAULT NULL,
  `content` TEXT DEFAULT NULL
);

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  `MetaProductId` INTEGER DEFAULT NULL,
  `title` TEXT NOT NULL,
  `metaTitle` TEXT DEFAULT NULL,
  `slug` TEXT NOT NULL,
  `content` TEXT DEFAULT NULL
);

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  `userId` INTEGER NOT NULL,
  `type` INTEGER NOT NULL DEFAULT 0,
  `status` INTEGER NOT NULL DEFAULT 0,
  `subTotal` REAL NOT NULL DEFAULT 0,
  `MetaProductDiscount` REAL NOT NULL DEFAULT 0,
  `tax` REAL NOT NULL DEFAULT 0,
  `shipping` REAL NOT NULL DEFAULT 0,
  `total` REAL NOT NULL DEFAULT 0,
  `promo` TEXT DEFAULT NULL,
  `discount` REAL NOT NULL DEFAULT 0,
  `grandTotal` REAL NOT NULL DEFAULT 0,
  `createdAt` TEXT NOT NULL
);

DROP TABLE IF EXISTS `supplier`;
CREATE TABLE `supplier` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  `name` TEXT NOT NULL,
  `contact` TEXT,
  `address` TEXT
);

DROP TABLE IF EXISTS `inventory`;
CREATE TABLE `inventory` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  `productId` INTEGER NOT NULL,
  `quantity` INTEGER NOT NULL
);

DROP TABLE IF EXISTS `orderItem`;
CREATE TABLE `orderItem` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  `orderId` INTEGER NOT NULL,
  `productId` INTEGER NOT NULL,
  `quantity` INTEGER NOT NULL
);

DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  `name` TEXT NOT NULL
);

DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  `userId` INTEGER NOT NULL,
  `accessLevel` INTEGER NOT NULL
);