import { sql } from "@vercel/postgres";
import { SimpleStats, Counts, Revenue, BestSeller } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";
import { spawn } from 'child_process';
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
      itemCount: itemCount.rows[0],
      orderNum: orderNum.rows[0],
      returnNum: returnNum.rows[0],
    };
    return fetcheddata;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch statistical card data.");
  }
}

export async function fetchSalesByRegion(user: any) {
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
        returnNum: number // The total number of returns of the region
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
      return data.rows;
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
      const low = await sql`SELECT m.title FROM item as i, meta_product as m, orders as o WHERE o.companyname = ${dummyUser.companyname} AND o.type = 'OUTGOING' AND o.id = i.orderid AND m.id = i.metaid GROUP BY m.title HAVING COUNT(i.id) < 10`;
      const med = await sql`SELECT m.title FROM item as i, meta_product as m, orders as o WHERE o.companyname = ${dummyUser.companyname} AND o.type = 'OUTGOING' AND o.id = i.orderid AND m.id = i.metaid GROUP BY m.title HAVING COUNT(i.id)>= 10 AND COUNT(i.id) < 50`;
      const high = await sql`SELECT m.title FROM item as i, meta_product as m, orders as o WHERE o.companyname = ${dummyUser.companyname} AND o.type = 'OUTGOING AND o.id = i.orderid AND m.id = i.metaid GROUP BY m.title HAVING COUNT(i.id) >= 50`;
      // console.log('Data fetch complete after 3 seconds.');
      const fetcheddata = [low.rows, med.rows, high.rows];
      return fetcheddata;
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
  /*
   Should return an array of objects in the following format:
      [
        {
          date: "Jan 22",
          predicitions: 2890,
          actual: 2338,
        },
        {
          date: "Feb 22",
          SemiAnalysis: 2756,
          actual: 2103,
        },
        {
          date: "Mar 22",
          SemiAnalysis: 3322,
          actual: 2194,
        },
        {
          date: "Apr 22",
          SemiAnalysis: 3470,
          actual: 2108,
        },
        {
          date: "May 22",
          SemiAnalysis: 3475,
          actual: 1812,
        },
        {
          date: "Jun 22",
          SemiAnalysis: 3129,
          actual: 1726,
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
        const python = spawn('python', ['src/lib/salespredic.py']);

        // Send data to Python script
        python.stdin.write(JSON.stringify(data));
        python.stdin.end();

// Handle output
python.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

python.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

python.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});




        return data.rows;
      } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to Sales Prediction.");
      }


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
        const python = spawn('python', ['src/lib/salespredic.py']);

        // Send data to Python script
        python.stdin.write(JSON.stringify(data));
        python.stdin.end();

// Handle output
python.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

python.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

python.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});




        return data.rows;
      } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to Sales Prediction.");
      }


}

export async function fetchPredictiveAnalysis(user: any) {
  const dummyUser = {
    userId: 51,
    companyname: "Mzeeijco",
  };
  /*
   Should return an array of objects in the following format:
      [
          {
            name: "Amphibians",
            "Number of threatened species": 2488,
          },
          {
            name: "Birds",
            "Number of threatened species": 1445,
          },
          {
            name: "Crustaceans",
            "Number of threatened species": 743,
          },
          {
            name: "Ferns",
            "Number of threatened species": 281,
          },
          {
            name: "Arachnids",
            "Number of threatened species": 251,
          },
          {
            name: "Corals",
            "Number of threatened species": 232,
          },
          {
            name: "Algae",
            "Number of threatened species": 98,
          },
        ];
   */
}

export async function fetchInventoryTableData(user: any) {
  const dummyUser = {
    userId: 51,
    companyname: "Betaco",
  };
  /*
   Should return an array of objects in the following format:
      [
        {
          Id
          Product Name
          Company / Manufacturer Name
          Supplier Name
          SKU
          UPC
          Item Price
          Item Quantity
          Stock Status
          Expiry Date
        },
       ...
      ];
   */
      /* const data = await sql`SELECT m.id, m.title, m.companyname, m.sku, m.upc, m.price, m.stockstatus, m.estimatedexp, s.name, COUNT(i.id)
      FROM   Meta_product as m, supplier as s ,item as i
      WHERE m.companyname = ${user.companyname} AND i.metaid = m.id AND s.id = m.supplierid
      GROUP BY m.id, m.title, m.companyname, s.name, m.sku, m.upc, m.price, m.stockstatus, m.estimatedexp
      `; */
      try {
        const data = await sql`SELECT DISTINCT m.id, m.title, m.companyname, m.sku, m.upc, m.price, m.stockstatus, m.estimatedexp,  COUNT(i.id)
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
  /*
   Should return an array of objects in the following format:
      [
        {
          Id
          All money stuff (tax, subtotal, etc…)
          Created at
          Company Name sold to / bought from 
          Order status
          Created At
        },
       ...
      ];
   */
      try {
        const data = await sql`SELECT i.id, o.destinationcompany, i.tax, i.subtotal, i.total, o.status, i.createdat
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

export async function fetchBestSellers() {
  noStore();
  try {
    //TODO: data should contain a data
    const low = (
      await sql<BestSeller>`SELECT imgUrl FROM items where orders less than 200`
    ).rows;
    const med = (
      await sql<BestSeller>`SELECT imgUrl FROM item where orders between 200 and 300`
    ).rows;
    const high = (
      await sql<BestSeller>`SELECT imgUrl FROM item where orders greater than 300`
    ).rows;

    const data: BestSeller[][] = [low, med, high];

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

// export async function fetchOrderByRegion() {
//   noStore()
//   try {

//     const orderNum = await sql<Counts>`SELECT * FROM `;
//     const returnNum = await sql<Counts>`SELECT COUNT(*) FROM users`;
//     const itemNum = await sql<Counts>`SELECT COUNT(*) FROM invoices`;

//     const data: SimpleStats = {
//       orderNum: orderNum.rows[0].count,
//       returnNum: returnNum.rows[0].count,
//       itemNum: itemNum.rows[0].count
//     }

//     return data;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch revenue data.');
//   }
// }

// export async function fetchLatestInvoices() {
//   try {
//     const data = await sql<LatestInvoiceRaw>`
//       SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
//       FROM invoices
//       JOIN customers ON invoices.customer_id = customers.id
//       ORDER BY invoices.date DESC
//       LIMIT 5`;

//     const latestInvoices = data.rows.map((invoice) => ({
//       ...invoice,
//       amount: formatCurrency(invoice.amount),
//     }));
//     return latestInvoices;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch the latest invoices.');
//   }
// }

// export async function fetchCardData() {
//   try {
//     // You can probably combine these into a single SQL query
//     // However, we are intentionally splitting them to demonstrate
//     // how to initialize multiple queries in parallel with JS.
//     const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
//     const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
//     const invoiceStatusPromise = sql`SELECT
//          SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
//          SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
//          FROM invoices`;

//     const data = await Promise.all([
//       invoiceCountPromise,
//       customerCountPromise,
//       invoiceStatusPromise,
//     ]);

//     const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
//     const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
//     const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
//     const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

//     return {
//       numberOfCustomers,
//       numberOfInvoices,
//       totalPaidInvoices,
//       totalPendingInvoices,
//     };
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch card data.');
//   }
// }

// const ITEMS_PER_PAGE = 6;
// export async function fetchFilteredInvoices(
//   query: string,
//   currentPage: number,
// ) {
//   const offset = (currentPage - 1) * ITEMS_PER_PAGE;

//   try {
//     const invoices = await sql<InvoicesTable>`
//       SELECT
//         invoices.id,
//         invoices.amount,
//         invoices.date,
//         invoices.status,
//         customers.name,
//         customers.email,
//         customers.image_url
//       FROM invoices
//       JOIN customers ON invoices.customer_id = customers.id
//       WHERE
//         customers.name ILIKE ${`%${query}%`} OR
//         customers.email ILIKE ${`%${query}%`} OR
//         invoices.amount::text ILIKE ${`%${query}%`} OR
//         invoices.date::text ILIKE ${`%${query}%`} OR
//         invoices.status ILIKE ${`%${query}%`}
//       ORDER BY invoices.date DESC
//       LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
//     `;

//     return invoices.rows;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch invoices.');
//   }
// }

// export async function fetchInvoicesPages(query: string) {
//   try {
//     const count = await sql`SELECT COUNT(*)
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE
//       customers.name ILIKE ${`%${query}%`} OR
//       customers.email ILIKE ${`%${query}%`} OR
//       invoices.amount::text ILIKE ${`%${query}%`} OR
//       invoices.date::text ILIKE ${`%${query}%`} OR
//       invoices.status ILIKE ${`%${query}%`}
//   `;

//     const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
//     return totalPages;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch total number of invoices.');
//   }
// }

// export async function fetchInvoiceById(id: string) {
//   try {
//     const data = await sql<InvoiceForm>`
//       SELECT
//         invoices.id,
//         invoices.customer_id,
//         invoices.amount,
//         invoices.status
//       FROM invoices
//       WHERE invoices.id = ${id};
//     `;

//     const invoice = data.rows.map((invoice) => ({
//       ...invoice,
//       // Convert amount from cents to dollars
//       amount: invoice.amount / 100,
//     }));

//     return invoice[0];
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch invoice.');
//   }
// }

// export async function fetchCustomers() {
//   try {
//     const data = await sql<CustomerField>`
//       SELECT
//         id,
//         name
//       FROM customers
//       ORDER BY name ASC
//     `;

//     const customers = data.rows;
//     return customers;
//   } catch (err) {
//     console.error('Database Error:', err);
//     throw new Error('Failed to fetch all customers.');
//   }
// }

// export async function fetchFilteredCustomers(query: string) {
//   try {
//     const data = await sql<CustomersTable>`
// 		SELECT
// 		  customers.id,
// 		  customers.name,
// 		  customers.email,
// 		  customers.image_url,
// 		  COUNT(invoices.id) AS total_invoices,
// 		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
// 		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
// 		FROM customers
// 		LEFT JOIN invoices ON customers.id = invoices.customer_id
// 		WHERE
// 		  customers.name ILIKE ${`%${query}%`} OR
//         customers.email ILIKE ${`%${query}%`}
// 		GROUP BY customers.id, customers.name, customers.email, customers.image_url
// 		ORDER BY customers.name ASC
// 	  `;

//     const customers = data.rows.map((customer) => ({
//       ...customer,
//       total_pending: formatCurrency(customer.total_pending),
//       total_paid: formatCurrency(customer.total_paid),
//     }));

//     return customers;
//   } catch (err) {
//     console.error('Database Error:', err);
//     throw new Error('Failed to fetch customer table.');
//   }
// }

// export async function getUser(email: string) {
//   try {
//     const user = await sql`SELECT * FROM users WHERE email=${email}`;
//     return user.rows[0] as User;
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     throw new Error('Failed to fetch user.');
//   }
// }
