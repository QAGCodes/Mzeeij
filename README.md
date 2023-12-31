# Project Name

One8 Inventory Managment System (IMS)

## Project Structure

Almost all relevant files are in the src directory.

### Outside src

The only relevant files outside src is the .env file and the prisma/schema.prisma files. The env file contains environement varaibles that are needed for the database connection and the next-auth library. The schema file contains the current schema that we have for the database. You can look online for ways to change the schemas on this file and then push them to the actual database.

### Inside src

`lib/data.ts`: Contains all the functions that fetch data from the database. Any new data-fetching functions should be written there

`components/`: Contains small components that comprise the pages in our apps. You usually won't have to look or use those.

`app/`: It is the directory where all of our pages live. You can look [here](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) for a quick understanding of how the app directory works in nextjs. The only special directory there is the `app/api` directory. This directory is not meant to be a page, but code that gets invoked by pages to mostly do data-changing requests to the backend/database. The `app/tests` is for creating test pages to test functionalities of your choice.

## Prerequisites

Make sure that you have the latest version of node.js installed. You can download the latest version from [here](https://nodejs.org/en/download/current).

## Installation

1. Clone the repository using your preferred method
2. Navigate to the project directory: `cd mzeeij`
3. Install the dependencies: `npm install`

## Usage

Explain how to run the Next.js app in development mode.

1. Start the development server: `npm run dev`
2. Open your browser and navigate to `http://localhost:3000` to view the app.

Note: your server might not be on port 3000. Check the console output after running the server to check the port in case you face any problems.

**If you feel lost or need any help navigating nextJS let me know!**
