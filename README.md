## Note the views and frontend are not finished yet. They will be updated soon. In order to test te API we will be using Postman (https://www.postman.com/). See more instructions below.


# API to handle requests 
 This is an admin interface to analize and manage the use of shortened links and qr codes by the employees of the company. It is a Node.js application using the Express framework for building a web server. It also utilizes Mongoose for MongoDB database interaction, EJS for rendering views, NanoId for generating unique short URLs, and other npm packages like dotenv and nodemon for environment variables and automatic server restarts during development. 

 - [Backend Files](#backend-files)
  - [Server.js](#1-serverjs)
  - [Models](#2-models)
  - [Routes](#3-routes)
  - [Utilities](#4-utilities)
  - [Views](#5-views)
- [Instructions](#instructions)
  - [Clone Repository and Install Dependencies](#clone-repository-and-install-dependencies)
  - [Set up Environment Variables](#set-up-environment-variables)
  - [Import Sample Data into MongoDB Compass](#import-sample-data-into-mongodb-compass)
  - [Run the Code](#run-the-code)
- [Test the API using Postman](#test-the-api-using-postman)
  - [Route: /api/getLinks (GET)](#route-api-getlinks-get)
  - [Route: /api/getLinksByUser/:id (GET)](#route-api-getlinksbyuserid-get)
  - [Route: /api/manipulateLink/:id (DELETE and PUT)](#route-api-manipulatelinkid-delete-and-put)
  - [Route: /api/users (POST)](#route-api-users-post)
- [Contact Information](#contact-information)

## Backend Files

### 1. Server.js

- Imports necessary dependencies and configurations.
- Connects to MongoDB using Mongoose and sets up the necessary database connection events.
- Defines middleware for parsing incoming requests and serving static files.
- Sets up the EJS template engine for rendering views.
- Creates indexes for the `apiKey` field in the `users` collection.
- Defines routes for the API, user manipulation, QR codes, and rendering views.
- Handles 404 errors and general error handling.
- Starts the server and listens on the specified port.

### 2. Models

- `apikeymodel.mjs`: Defines the model/schema for API keys.
- `qrcode.mjs`: Defines the model/schema for QR codes.
- `urlmodel.mjs`: Defines the model/schema for URLs.
- `usersmodel.mjs`: Defines the model/schema for users. Includes validation for the username, email and password fields.

### 3. Routes

- `api.mjs`: Handles general API routes.
- `getLinks.mjs`: Handles routes related to retrieving links.
- `getLinksByUser.mjs`: Handles routes for retrieving links by user.
- `manipulateLink.mjs`: Handles routes for manipulating links.
- `qrcodes.mjs`: Handles routes for QR codes.
- `users.mjs`: Handles routes for users.

### 4. Utilities

- `error.mjs`: Defines a utility for creating error objects.

### 5. Views

- `index.ejs`: EJS template for rendering the home page.
- `links.ejs`: EJS template for rendering the links page.
- `qrcodes.ejs`: EJS template for rendering the QR codes page.
- `users.ejs`: EJS template for rendering the users page.

## Instructions
### Clone Repository and Install Dependencies

    Open your terminal.
    Navigate to the directory where you want to clone the repository:
    `cd /path/to/your/directory`
    Clone the repository:
    `git clone https://github.com/josecobi/URLSnap-Mongoose-Express-RESTful-API`
    Change into the project directory:
    `cd URLSnap-Mongoose-Express-RESTful-API`
    Install dependencies:
    `npm install`

### Set up Environment Variables

    Create a .env file in the root of the project.

    Open the .env file and add the following content:

    `ATLAS_URI=your_mongodb_connection_string
    PORT=your_preferred_port`

Replace your_mongodb_connection_string with the connection string for your MongoDB Atlas cluster, and your_preferred_port with the port number you want the server to run on.

### Import Sample Data into MongoDB Compass

    Open MongoDB Compass or any MongoDB management tool of your choice.
    Connect to your MongoDB server.
    Create a new database (e.g., URLSnapDB).
    Select the database and navigate to the "Collection" tab.
    Import sample data from the each json file in the "sample-data" folder. Create a new collection within the database for each json file.

### Run the Code

    Back in the terminal, make sure you are in the project directory.
    Start the server:
    `npm start`
    Open your web browser and navigate to http://localhost:your_preferred_port to interact with the API.

Now, you have cloned the repository, imported sample data into MongoDB Compass, and started the server. You can test the API by using the provided routes and data.

## Test the API using Postman
Note the views and frontend are not finished yet. They will be updated soon. In order to test te API we will be using Postman (https://www.postman.com/). Let's assume your server is running locally on http://localhost:your_preferred_port.

### Route: /api/getLinks (GET)

    Open Postman:
        Launch Postman on your machine.

    Create a new GET request:
        Set the request type to GET.
        Enter the URL: http://localhost:your_preferred_port/api/getLinks.
        Set Headers: 
            - key: `x-api-key`
            - value: `example`
        Enter
        Click "Send" to make the request.

### Route: /api/getLinksByUser/:id (GET)

    Get User ID:
        You need a valid User ID to test this route. Retrieve a user's ID from your MongoDB database.

    Open Postman:
        Create a new GET request.
        Enter the URL, replacing :id with the actual user ID: http://localhost:your_preferred_port/api/getLinksByUser/:id.
        Set Headers: 
            - key: `x-api-key`
            - value: `example`
        Click "Send" to make the request.

### Route: /api/manipulateLink/:id (DELETE and PUT)

    Get URL ID:
        You need a valid Url ID to test this route. Retrieve a URL's ID from your MongoDB database.

    Open Postman:
        Create a new DELETE request.
        Enter the URL, replacing :id with the actual URL ID: http://localhost:your_preferred_port/api/manipulateLink/:id.
        Set Headers: 
            - key: `x-api-key`
            - value: `example`
        Click "Send" to delete the URL.

    Open Postman:
        Create a new PUT request.
        Enter the URL, replacing :id with the actual URL ID: http://localhost:your_preferred_port/api/manipulateLink/:id.
        Set Headers: 
            - key: `x-api-key`
            - value: `example`
        Click "Send" to update the URL.

### Route: /api/users (POST)

    Open Postman:
        Create a new POST request.
        Enter the URL: http://localhost:your_preferred_port/api/users.
        Set the request type to POST.
        Set Headers: 
            - key: `x-api-key`
            - value: `example
        In the request body, provide JSON data for a new user, including the API key:

        json

        {
          "username": "exampleUser",
          "email": "user@example.com",
          "password": "userPassword",
          "apiKey": "example"
        }

        Click "Send" to create a new user. Also, try using an username or email that already exists or leaving  any of the fields empty to test the validation.


Ensure you replace placeholders like :id with actual IDs from your MongoDB database.

Contact info jose.lopez.cobano@gmail.com (CobiDev)

