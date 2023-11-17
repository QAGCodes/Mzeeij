import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default async function handler(req: NextRequest) {
  // You can access query parameters, body, etc. from req
  const { searchParams } = new URL(req.url);

  try {
    // Fetch data asynchronously from the external API
    const response = await fetch(
      "https://654a4aefe182221f8d52e825.mockapi.io/items"
    );

    // Make sure the request was successful
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    // Parse the JSON data
    const data = await response.json();

    // Sending a JSON response
    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Handle any errors that occurred during the fetch operation
    const errorMessage = (error as Error).message;
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
