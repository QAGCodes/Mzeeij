const { faker } = require("@faker-js/faker");

function generateFakeData() {
  const data = {
    role: [],
    supplier: [],
    users: [],
    orders: [],
    product: [],
    inventory: [],
    orderItem: [],
    category: [],
    admin: [],
  };

  for (let i = 0; i < 10; i++) {
    data.role.push({
      name: faker.person.jobTitle(),
    });

    data.supplier.push({
      name: faker.company.name(),
      contact: faker.phone.number(),
      address: faker.location.streetAddress(false),
    });
  }

  for (let i = 0; i < 100; i++) {
    data.users.push({
      roleId: faker.number.int({ min: 1, max: 9 }),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      username: faker.internet.userName(),
      mobile: faker.phone.number(),
      email: faker.internet.email(),
      passwordHash: faker.internet.password(),
      registeredAt: faker.date.past(),
    });

    data.product.push({
      supplierId: faker.number.int({ min: 1, max: 10 }),
      orderId: faker.number.int({ min: 1, max: 100 }),
      title: faker.commerce.productName(),
      summary: faker.commerce.productDescription(),
      type: faker.number.int({ min: 0, max: 1 }),
      sku: faker.string.uuid(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      content: faker.lorem.paragraph(),
    });

    data.orders.push({
      userId: faker.number.int({ min: 1, max: 100 }),
      type: faker.number.int({ min: 0, max: 1 }),
      status: faker.number.int({ min: 0, max: 1 }),
      subTotal: faker.commerce.price(),
      MetaProductDiscount: faker.commerce.price(),
      tax: faker.commerce.price(),
      shipping: faker.commerce.price(),
      total: faker.commerce.price(),
      promo: faker.word.noun(),
      discount: faker.commerce.price(),
      grandTotal: faker.commerce.price(),
      createdAt: faker.date.past(),
    });

    data.inventory.push({
      productId: faker.number.int({ min: 1, max: 100 }),
      quantity: faker.number.int({ min: 1, max: 100 }),
    });

    data.orderItem.push({
      orderId: faker.number.int({ min: 1, max: 100 }),
      productId: faker.number.int({ min: 1, max: 100 }),
      quantity: faker.number.int({ min: 1, max: 100 }),
    });

    data.category.push({
      productId: faker.number.int({ min: 1, max: 100 }),
      title: faker.commerce.productName(),
      metaTitle: faker.commerce.productName(),
      slug: faker.internet.userName(),
      content: faker.lorem.paragraph(),
    });
  }
  for (let i = 0; i < 5; i++) {
    data.admin.push({
      userId: faker.number.int({ min: 1, max: 100 }),
      accessLevel: faker.number.int({ min: 1, max: 10 }),
    });
  }

  return data;
}

module.exports = generateFakeData;
