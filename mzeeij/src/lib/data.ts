import { sql } from "@vercel/postgres";
import { SimpleStats, Counts, Revenue, BestSeller } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";
import { spawn } from "child_process";
// start new data-fetching functions

/*
  const user = {
    userId: number,
    companyName: string,
  }
*/

export async function fetchStatisticsCardData(user: any) {
  const dummyUser = {
    userId: 51,
    companyname: "Mzeeijco",
  };

  // This function should return an object with the following structure:
  /*
    {
      itemCount: number, // The total number of items in the inventory
      orderNum: number, // The total number of orders
      returnNum: number // The total number of returns
    }
  */

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

export async function fetchSalesByRegion(user: any) {
  noStore();
  const dummyUser = {
    userId: 51,
    companyname: "Mzeeijco",
  };
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

export async function fetchBestSellersData(user: any) {
  const dummyUser = {
    userId: 51,
    companyname: "Mzeeijco",
  };
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

export async function fetchSalesPerProduct(user: any) {
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

export async function fetchRestockPoints(user: any) {
  const dummyUser = {
    userId: 51,
    companyname: "Mzeeijco",
  };
  /*
   Should return an array of objects in the following format:
      [
        {
          date: "Jan 23",
          "Distance Running": 167,
          "Road Cycling": 145,
          "Open Water Swimming": 135,
          "Hatha Yoga": 115,
          "Street Basketball": 150,
          ... // each item except for date will represent a line on the graph
        },
      ];
   */
  try {
    const data = await sql`SELECT o.id, o.createdat, COUNT(i.id)
        FROM orders as o, item as i
        WHERE o.type = 'OUTGOING' AND o.id = i.orderid  
        GROUP BY o.id, o.createdat
        ORDER BY o.createdat ASC
        `;
    // console.log('Data fetch complete after 3 seconds.');

    //python ML model
    // const python = spawn("wsl", ["/usr/bin/python3", "src/lib/salespredic.py"]);

    // // Send data to Python script
    // python.stdin.write(JSON.stringify(data.rows));
    // python.stdin.end();

    // // Handle output
    // python.stdout.on("data", (data) => {
    //   console.log(`stdout: ${data}`);
    // });

    // python.stderr.on("data", (data) => {
    //   console.error(`stderr: ${data}`);
    // });

    // python.on("close", (code) => {
    //   console.log(`child process exited with code ${code}`);
    // });

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to Sales Prediction.");
  }
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

// export async function fetchBestSellers() {
//   noStore();
//   try {
//     //TODO: data should contain a data
//     const low = (
//       await sql<BestSeller>`SELECT imgUrl FROM items where orders less than 200`
//     ).rows;
//     const med = (
//       await sql<BestSeller>`SELECT imgUrl FROM item where orders between 200 and 300`
//     ).rows;
//     const high = (
//       await sql<BestSeller>`SELECT imgUrl FROM item where orders greater than 300`
//     ).rows;

//     const data: BestSeller[][] = [low, med, high];

//     return data;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch revenue data.");
//   }
// }


export async function restockPointSplit() {
  noStore();
  countMax()
  const dummyUser = {
    userId: 51,
    companyname: "Mzeeijco",
  };
  //data should be returned this way
const dummy_data =  [
{
  metaId: 1,
},
{
  metaId: 2,
}

]
let currCount_redline = []
try {
  //TODO: data should contain a data
  for (let i = 0; i < dummy_data.length; i++) {
   currCount_redline.push(
    await sql`SELECT  m.redline, COUNT(i.id), m.maxcount
    FROM item as i, meta_product as m 
    where m.companyname = ${dummyUser.companyname} AND m.id = ${dummy_data[i].metaId} AND m.id = i.metaid`
   )
  }
  

  return currCount_redline;
} catch (error) {
  console.error("Database Error:", error);
  throw new Error("Failed to fetch revenue data.");
}
}

export async function countMax() {
  noStore();

  const dummyUser = {
    userId: 51,
    companyname: "Mzeeijco",
  };

  try {
    const numMeta = await sql`SELECT meta_product.id, COUNT(*) FROM meta_product WHERE companyname = ${dummyUser.companyname}`;
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
    return ;
  } catch (error) { 
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }

}

export async function postManual() {
  noStore();

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

//async function clientAddUser(user, newUserInfo);

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

//async function clientEditUser(user, editUserInfo);


/*
* clientDeleteUser(user, deleteUserInfo) will recieve the information of the user
* to be deleted in following format: (fields that the user did not change will have an empty string value)
* 
* const deleteUserInfo = {
*  id:           String // If it is possible. username below is there in case the ID is not fetched or the user only knows the username
*  username:     String 
* }
*/

//async function clientDeleteUser(user, deleteUserInfo);
