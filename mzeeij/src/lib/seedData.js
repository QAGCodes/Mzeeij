
// TODO : CHECK NEW SCHEMA BEFORE RUNNING SEEDER


const { faker } = require("@faker-js/faker");

module.exports = generateFakeData;
function generateFakeData() {
  const data = {
    admin: [],
    users: [],
    company: [],
    Meta_product: [],
    item: [],
    supplier: [],
    SupplierCompany: [],
    orders: [],
    invoice: [],
    images: [],
  };

  data.company.push({
    CompanyName: "Mzeeijco",
    CRnum: faker.string.uuid(),
    registeredat: faker.date.past(),
  });

  data.company.push({
    CompanyName: "Alphaco",
    CRnum: faker.string.uuid(),
    registeredat: faker.date.past(),
  });

  data.company.push({
    CompanyName: "Betaco",
    CRnum: faker.string.uuid(),
    registeredat: faker.date.past(),
  });

  for (let i = 0; i < 5; i++) {
    data.users.push({
      CompanyName: faker.helpers.arrayElement([
        "Mzeeijco",
        "Alphaco",
        "Betaco",
      ]),
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      username: faker.internet.userName(),
      mobile: faker.phone.number(),
      email: faker.internet.email(),
      passwordhash: faker.internet.password(),
      registeredat: faker.date.past(),
      role: faker.person.jobTitle(),
    });
  }

  for (let i = 0; i < 10; i++) {
    data.Meta_product.push({
      CompanyName: faker.helpers.arrayElement([
        "Mzeeijco",
        "Alphaco",
        "Betaco",
      ]),
      supplierid: faker.datatype.boolean()
        ? faker.number.int({ min: 1, max: 7 })
        : null,
      title: faker.commerce.productName(),
      summary: faker.commerce.productDescription(),
      sku: faker.string.uuid(),
      upc: faker.string.uuid(),
      price: faker.commerce.price(),
      createdat: faker.date.past(),
      updatedat: faker.date.recent(),
      estimatedExp: faker.date.future(),
      StockStatus: faker.helpers.arrayElement([
        "IN_STOCK",
        "OUT_OF_STOCK",
        "RESTOCK_SOON",
        "COMING_SOON",
        "DISCONTINUED",
      ]),
    });
  }

  for (let i = 0; i < 500; i++) {
    data.item.push({
      Metaid: faker.number.int({ min: 1, max: 10 }),
      orderid: faker.datatype.boolean()
        ? faker.number.int({ min: 1, max: 100 })
        : null,
      insertedat: faker.date.past(),
      removedat: faker.date.future(),
      location: faker.helpers.arrayElement(["Jeddah", "Riyadh", "Dammam"]),
      Expiredate: faker.date.future(),
    });
  }

  for (let i = 0; i < 10; i++) {
    data.supplier.push({
      name: faker.company.name(),
      phonenumber: faker.phone.number(),
      address: faker.location.streetAddress(),
      email: faker.internet.email(),
    });
  }

  for (let i = 0; i < 7; i++) {
    data.SupplierCompany.push({
      supplierId: faker.number.int({ min: 1, max: 7 }),
      companyName: faker.helpers.arrayElement([
        "Mzeeijco",
        "Alphaco",
        "Betaco",
      ]),
    });
  }

  for (let i = 0; i < 100; i++) {
    data.orders.push({
      CompanyName: faker.helpers.arrayElement([
        "Mzeeijco",
        "Alphaco",
        "Betaco",
      ]),
      userid: faker.number.int({ min: 1, max: 5 }),
      type: faker.helpers.arrayElement(["OUTGOING", "INCOMING", "RETURN"]),
      status: faker.helpers.arrayElement([
        "PENDING",
        "PAID",
        "UNPAID",
        "COMPLETE",
      ]),
      createdat: faker.date.past(),
      region: faker.helpers.arrayElement(["Jeddah", "Riyadh", "Dammam"]),
      destinationcompany: faker.company.name(),
      address: faker.location.streetAddress(),
    });
  }

  for (let i = 0; i < 100; i++) {
    data.invoice.push({
      orderid: i + 1,
      subtotal: faker.commerce.price(),
      metaproductdiscount: faker.commerce.price(),
      tax: faker.commerce.price(),
      shipping: faker.commerce.price(),
      total: faker.commerce.price(),
      promo: faker.word.words(),
      discount: faker.commerce.price(),
      grandtotal: faker.commerce.price(),
      createdat: faker.date.past(),
    });
  }

  for (let i = 0; i < 10; i++) {
    data.images.push({
      metaproductid: i+1,
      url: faker.image.url({
        width: 640,
        height: 480,
       
      }),
    });
  }

  return data;
}

module.exports = generateFakeData;
