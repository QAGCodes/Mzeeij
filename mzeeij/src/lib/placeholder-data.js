const faker = require('faker');

function generateFakeData() {
  const data = {
    users: [],
    roles: [],
    suppliers: [],
    products: [],
    orders: [],
    inventory: [],
    orderItems: [],
    categories: [],
    admins: [],
  };

  for (let i = 0; i < 100; i++) {
    data.users.push({
      roleId: faker.random.number({ min: 1, max: 10 }),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      mobile: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      passwordHash: faker.internet.password(),
      registeredAt: faker.date.past(),
    });

    data.roles.push({
      name: faker.name.jobTitle(),
    });

    data.suppliers.push({
      name: faker.company.companyName(),
      contact: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
    });

    data.products.push({
      supplierId: faker.random.number({ min: 1, max: 10 }),
      orderId: faker.random.number({ min: 1, max: 10 }),
      title: faker.commerce.productName(),
      summary: faker.commerce.productDescription(),
      type: faker.random.number({ min: 0, max: 1 }),
      sku: faker.random.uuid(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      content: faker.lorem.paragraph(),
    });

   
    data.orders.push({
      userId: faker.random.number({ min: 1, max: 100 }),
      type: faker.random.number({ min: 0, max: 1 }),
      status: faker.random.number({ min: 0, max: 1 }),
      subTotal: faker.commerce.price(),
      MetaProductDiscount: faker.commerce.price(),
      tax: faker.commerce.price(),
      shipping: faker.commerce.price(),
      total: faker.commerce.price(),
      promo: faker.random.word(),
      discount: faker.commerce.price(),
      grandTotal: faker.commerce.price(),
      createdAt: faker.date.past(),
    });
  
    data.inventory.push({
      productId: faker.random.number({ min: 1, max: 100 }),
      quantity: faker.random.number({ min: 1, max: 100 }),
    });
  
    data.orderItems.push({
      orderId: faker.random.number({ min: 1, max: 100 }),
      productId: faker.random.number({ min: 1, max: 100 }),
      quantity: faker.random.number({ min: 1, max: 100 }),
    });
  
    data.categories.push({
      productId: faker.random.number({ min: 1, max: 100 }),
      title: faker.commerce.productName(),
      metaTitle: faker.commerce.productName(),
      slug: faker.internet.userName(),
      content: faker.lorem.paragraph(),
    });

    data.admins.push({
      userId: faker.random.number({ min: 1, max: 100 }),
      accessLevel: faker.random.number({ min: 1, max: 10 }),
    });
    
  }

  return data;
}

module.exports = generateFakeData;