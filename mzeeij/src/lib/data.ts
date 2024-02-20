import { sql } from "@vercel/postgres";
import { SimpleStats, Counts, Revenue, BestSeller } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";
import { spawn } from "child_process";
// start new data-fetching functions

// This function should return an object with the following structure:
/*
    {
      itemCount: number, // The total number of items in the inventory
      orderNum: number, // The total number of orders
      returnNum: number // The total number of returns
    }
  */

//functions that can be found in the data.ts file
//fetching functions:
//fetchStatisticsCardData(user: any)
//fetchSalesByRegion(user: any)
//fetchBestSellersData(user: any)
//fetchSalesPerProduct(user: any)
//fetchInventoryTableData(user: any)
//fetchInvoicesTableData(user: any)

//TODO: check and edit these functions:
//fetchRevenue()
//fetchSimpleStats()

//functions for client side operations:
//clientAddItem()
//clientAddUser(user: any, newUserInfo: any)
//clientEditUser(user: any, editUserInfo: any)
//clientDeleteUser(user: any, deleteUserInfo: any)

export async function fetchStatisticsCardData(user: any) {
  const dummyUser = {
    userId: 51,
    companyname: "Mzeeijco",
  };

  try {
    const itemCount =
      await sql`SELECT COUNT(*) FROM item as i, meta_product as m WHERE m.companyname = ${dummyUser.companyname} AND m.id = i.metaid `;
    const orderNum =
      await sql`SELECT COUNT(*) FROM orders as o WHERE o.companyname = ${dummyUser.companyname} AND o.type = 'OUTGOING' OR o.type = 'INCOMING'`;
    const returnNum =
      await sql`SELECT COUNT(*) FROM orders as o WHERE o.companyname = ${dummyUser.companyname} AND o.type = 'RETURN'`;
    console.log("Data fetch complete after 3 seconds.");
    const fetcheddata = {
      itemCount: itemCount.rows[0].count,
      orderNum: orderNum.rows[0].count,
      returnNum: returnNum.rows[0].count,
    };

    return fetcheddata;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch statistical card data.");
  }
}
// This function should return an array of objects with the following structure:
/*
    [
      {
        regionName: string, // region name
        Sales: number, // The total number of orders of the region
      },
      .
      .
      .
    ]
  */
export async function fetchSalesByRegion(user: any) {
  noStore();
  const dummyUser = {
    userId: 51,
    companyname: "Mzeeijco",
  };

  try {
    const data = await sql`SELECT o.region, COUNT(*) 
      FROM orders as o
      WHERE o.companyname = ${dummyUser.companyname} AND o.type = 'OUTGOING'
      GROUP BY o.region
      ORDER BY o.region`;
    // console.log('Data fetch complete after 3 seconds.');
    const result = data.rows.map((row) => ({
      regionName: row.region,
      sales: parseInt(row.count, 10),
    }));
    return result;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch sales by region data.");
  }
}

// This function should return 3 arrays of objects with the following structure:
/*
    [
      {
        imgUrl: string, // The total number of items in the inventory
        name: string, // The total number of orders
      },
      .
      .
      .
    ]

    The three arrays should be returned as follows:
    the first array should return the items that had [0-100) sales
    the second should return the items that had [100-500) sales
    the third should return the items that had sales >= 500
  */
export async function fetchBestSellersData(user: any) {
  const dummyUser = {
    userId: 51,
    companyname: "Mzeeijco",
  };

  try {
    const low =
      await sql`SELECT m.title, m.imageurl, COUNT(i.id) FROM item as i, meta_product as m, orders as o WHERE o.companyname = ${dummyUser.companyname} AND o.type = 'OUTGOING' AND o.id = i.orderid AND m.id = i.metaid GROUP BY m.title, m.imageurl HAVING COUNT(i.id) < 3 ORDER BY COUNT(i.id) ASC LIMIT 3`;
    const med =
      await sql`SELECT m.title, m.imageurl, COUNT(i.id) FROM item as i, meta_product as m, orders as o WHERE o.companyname = ${dummyUser.companyname} AND o.type = 'OUTGOING' AND o.id = i.orderid AND m.id = i.metaid GROUP BY m.title, m.imageurl HAVING COUNT(i.id)>= 3 AND COUNT(i.id) < 5 ORDER BY COUNT(i.id) DESC LIMIT 3`;
    const high =
      await sql`SELECT m.title, m.imageurl, COUNT(i.id) FROM item as i, meta_product as m, orders as o WHERE o.companyname = ${dummyUser.companyname} AND o.type = 'OUTGOING' AND o.id = i.orderid AND m.id = i.metaid GROUP BY m.title, m.imageurl HAVING COUNT(i.id) >= 5 ORDER BY COUNT(i.id) DESC LIMIT 3`;
    // console.log('Data fetch complete after 3 seconds.');
    const data = [low.rows, med.rows, high.rows];
    const result = data.map((array) =>
      array.map((row) => ({
        imgUrl: row.imageurl,
        name: row.title,
        totalSales: row.count,
      }))
    );
    return result;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch best sellers data.");
  }
}

export async function fetchSalesPrediction(user: any) {
  const dummyUser = {
    userId: 51,
    companyname: "Mzeeijco",
  };

  //Should return an array of objects in the following format:
  const dummy_result = [
    {
      date: "Jan 22",
      actual: 2338,
    },
    {
      date: "Feb 22",
      actual: 1800,
    },
    {
      date: "Mar 22",
      predicitions: 2194,
      actual: 2194,
    },
    {
      date: "Apr 22",
      predicitions: 1500,
    },
    {
      date: "May 22",
      predicitions: 3475,
    },
    {
      date: "Jun 22",
      predicitions: 3129,
    },
  ];

  // try {
  //   const data = await sql`SELECT o.createdat, COUNT(i.id)
  //       FROM orders as o, item as i
  //       WHERE o.type = 'OUTGOING' AND o.id = i.orderid
  //       GROUP BY o.createdat
  //       ORDER BY o.createdat ASC
  //       `;
  // console.log('Data fetch complete after 3 seconds.');

  //     //python ML model
  //     const python = spawn('python', ['src/lib/salespredic.py']);

  //     // Send data to Python script
  //     python.stdin.write(JSON.stringify(data.rows));
  //     python.stdin.end();

  //     // Handle output
  //     let result = '';
  // python.stdout.on('data', (data) => {
  //   result += data.toString();
  // });

  // python.on('close', (code) => {
  //   console.log(`child process exited with code ${code}`);
  //   const df = JSON.parse(result);
  //   console.log(df);
  // });

  //     python.stderr.on("data", (data) => {
  //       console.error(`stderr: ${data}`);
  //     });

  return dummy_result;
  // } catch (error) {
  //   console.error("Database Error:", error);
  //   throw new Error("Failed to Sales Prediction.");
  // }
}

export async function fetchInventoryTableData(user: any) {
  const dummyUser = {
    userId: 51,
    companyname: "Betaco",
  };

  try {
    const data =
      await sql`SELECT DISTINCT m.id, m.title, m.companyname, m.sku, m.upc, m.price, m.stockstatus, m.estimatedexp,  COUNT(i.id)
      FROM   Meta_product as m, supplier as s ,item as i
      WHERE m.companyname = ${dummyUser.companyname} AND i.metaid = m.id 
      GROUP BY m.id, m.title, m.companyname, s.name, m.sku, m.upc, m.price, m.stockstatus, m.estimatedexp
      `;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetchInventoryTableData.");
  }
}

export async function fetchInvoicesTableData(user: any) {
  const dummyUser = {
    userId: 51,
    companyname: "Mzeeijco",
  };

  try {
    const data =
      await sql`SELECT i.id, o.destinationcompany, i.tax, i.subtotal, i.total, o.status, i.createdat
      FROM   orders as o, invoice as i
      WHERE o.companyname = ${dummyUser.companyname} AND i.orderid = o.id 
      GROUP BY i.id, o.destinationcompany, i.tax, i.subtotal, i.total, o.status, i.createdat
      `;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetchInvoicesTableData.");
  }
}

// end new data-fetching functions

export async function fetchRevenue() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).

  const user = {};

  try {
    const data = await sql`SELECT * FROM revenue`;

    // console.log('Data fetch complete after 3 seconds.');
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchSimpleStats() {
  noStore();
  try {
    // IMPORTANT: Counts is a data type defined in src/lib/definitions.ts that defines the structure
    // of the data returned
    const orderNum = await sql<Counts>`SELECT COUNT(*) AS count
FROM orders
WHERE userId = 51`;
    const returnNum = await sql<Counts>`SELECT COUNT(*) AS count
FROM orders
WHERE userId = 51
  AND status = 1;`;
    const itemNum =
      await sql<Counts>`SELECT SUM(quantity) AS count FROM inventory`;

    const data: SimpleStats = {
      orderNum: orderNum.rows[0].count,
      returnNum: returnNum.rows[0].count,
      itemNum: itemNum.rows[0].count,
    };

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch simple stats data.");
  }
}

export async function fetchOrderByRegion() {
  noStore();
  try {
    const data =
      await sql<Revenue>`SELECT u.username AS label, SUM(o.subTotal) AS quantity
FROM orders o
JOIN users u ON o.userId = u.id
group by u.username
limit 5
`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch order by region data.");
  }
}

export async function fetchRestockPointDummy() {
  let currCount_redline = [
    {
      name: "Product A",
      redline: 20,
      count: 10,
      maxcount: 40,
    },
    {
      name: "Product B",
      redline: 250,
      count: 280,
      maxcount: 500,
    },
    {
      name: "Product C",
      redline: 40,
      count: 50,
      maxcount: 100,
    },
    {
      name: "Product D",
      redline: 80,
      count: 180,
      maxcount: 200,
    },
  ];

  return currCount_redline;
}

export async function restockPointSplit(user: any, data: any) {
  noStore();
  countMax();
  const dummyUser = {
    userId: 51,
    companyname: "Mzeeijco",
  };
  //data should be returned this way
  const dummy_data = [
    {
      metaId: 1,
    },
    {
      metaId: 2,
    },
  ];
  let currCount_redline = [];
  try {
    //TODO: data should contain a data
    for (let i = 0; i < dummy_data.length; i++) {
      currCount_redline.push(
        await sql`SELECT  m.redline, COUNT(i.id), m.maxcount
    FROM item as i, meta_product as m 
    where m.companyname = ${dummyUser.companyname} AND m.id = ${dummy_data[i].metaId} AND m.id = i.metaid`
      );
    }

    return currCount_redline;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch restockPointSplit data.");
  }
}

export async function countMax() {
  noStore();

  const dummyUser = {
    userId: 51,
    companyname: "Mzeeijco",
  };

  try {
    const numMeta =
      await sql`SELECT meta_product.id, COUNT(*) FROM meta_product WHERE companyname = ${dummyUser.companyname}`;
    for (let i = 0; i < numMeta.rows[0].count; i++) {
      const data = await sql`SELECT m.maxcount, COUNT(i.id)
    FROM item as i, meta_product as m 
    where m.companyname = ${dummyUser.companyname} AND m.id = i.metaid AND m.id = ${numMeta.rows[i].id}`;

      if (data.rows[0].count > data.rows[0].maxcount) {
        await sql`UPDATE meta_product
      SET maxcount = ${data.rows[0].count}
      where id = ${numMeta.rows[i].id}`;
      }
    }
    return;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function clientAddMetaProduct(user: any, newItem: any) {
  noStore();

  const dummyUser = {
    userId: 51,
    companyname: "Mzeeijco",
  };

  const dummy_metaproduct = {
    title: "test",
    sku: "test",
    upc: "test",
    price: 10,
    estimatedexp: "2023-03-03",
    redline: 10,
    maxcount: 10,
    stockstatus: "COMING_SOON",
  };

  try {
    const data =
      await sql`INSERT INTO meta_product (title, companyname, sku, upc, price, stockstatus, estimatedexp, redline, maxcount) 
    VALUES (${dummy_metaproduct.title}, ${dummyUser.companyname}, ${dummy_metaproduct.sku}, ${dummy_metaproduct.upc}, ${dummy_metaproduct.price}, ${dummy_metaproduct.stockstatus}, ${dummy_metaproduct.estimatedexp}, ${dummy_metaproduct.redline}, ${dummy_metaproduct.maxcount})`;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

/*
 * clientAddUser(user, newUserInfo) will recieve the information of the new user
 * to be created in following format:
 *
 * const newUserInfo = {
 *  firstname:    String
 *  lastname:     String
 *  username:     String
 *  mobile:       String
 *  email:        String
 *  password:     String // THIS PASSWORD IS NOT THE HASHED PASSOWORD. Hashing should be done in the function itself using bcrypt functions.
 *  role:         String
 * }
 *
 * The company name for which the user will belong should be found in the user object.
 */
async function clientAddUser(user: any, newUserInfo: any) {
  const dummy_user = {
    userId: 51,
    companyname: "Mzeeijco",
  };

  const newUserInfo1 = {
    firstname: "Alsayed",
    lastname: "Majed",
    companyname: dummy_user.companyname,
    username: "AlsayedMajed",
    mobile: "697",
    email: "alsayed@dummy.com",
    passwordhash: "test", // THIS PASSWORD IS NOT THE HASHED PASSOWORD. Hashing should be done in the function itself using bcrypt functions.
    role: null,
  };

  try {
    const data =
      await sql`INSERT INTO users (firstname, lastname, companyname, username, mobile, email, passwordhash, role) 
    VALUES (${newUserInfo1.firstname}, ${newUserInfo1.lastname}, ${newUserInfo1.companyname}, ${newUserInfo1.username}, ${newUserInfo1.mobile}, ${newUserInfo1.email}, ${newUserInfo1.passwordhash}, ${newUserInfo1.role})`;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

/*
 * clientEditUser(user, editUserInfo) will recieve the information of the user
 * to be edited in following format: (fields that the user did not change will have an empty string value)
 *
 * const editUserInfo = {
 *  firstname:    String
 *  lastname:     String
 *  username:     String
 *  mobile:       String
 *  email:        String
 *  password:     String // THIS PASSWORD IS NOT THE HASHED PASSOWORD. Hashing should be done in the function itself using bcrypt functions.
 *  role:         String
 * }
 */

async function clientEditUser(user: any, editUserInfo: any) {
  const dummy_user = {
    userId: 51,
    companyname: "Mzeeijco",
  };
  const editUserInfo1 = {
    id: 12,
    username: "AlsayedMajed2",
    mobile: "697",
  };

  // Function to generate the SET clause of the SQL query
  const generateSetClause = (userInfo: any) => {
    return Object.entries(userInfo)
      .filter(([key, value]) => value !== "" && key !== "id")
      .map(([key, value]) => `${key} = ${value}`)
      .join(" AND ");
  };

  try {
    const data = await sql`UPDATE users SET  ${generateSetClause(
      editUserInfo
    )} WHERE id = ${editUserInfo.id} `;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
/*
 * clientDeleteUser(user, deleteUserInfo) will recieve the information of the user
 * to be deleted in following format: (fields that the user did not change will have an empty string value)
 *
 * const deleteUserInfo = {
 *  id:           String // If it is possible. username below is there in case the ID is not fetched or the user only knows the username
 *  username:     String
 * }
 */

async function clientDeleteUser(user: any, deleteUserInfo: any) {
  const dummy_user = {
    userId: 51,
    companyname: "Mzeeijco",
  };
  const deleteUserInfo1 = {
    id: 51,
    username: "AlsayedMajed",
  };
  if (dummy_user.userId == deleteUserInfo1.id) {
    return "error: cannot delete the user that is currently logged in";
  }

  try {
    const data = await sql`DELETE FROM users WHERE id = ${deleteUserInfo1.id} `;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
