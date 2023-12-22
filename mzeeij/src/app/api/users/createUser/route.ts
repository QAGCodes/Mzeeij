export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    // Extract user data from request body
    const { name, email } = req.body;

    // Here you would normally insert the data into a database
    // For demonstration, we're just logging it to the console
    console.log("Creating user:", name, email);

    // Respond with a success status
    res.status(200).json({ message: "User created" });
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
