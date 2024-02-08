# API to handle requests 
 This is an admin interface to analize and manage the use of shortened links and qr codes by the employees of the company. It is a Node.js application using the Express framework for building a web server. It also utilizes Mongoose for MongoDB database interaction, EJS for rendering views, NanoId for generating unique short URLs, and other npm packages like dotenv and nodemon for environment variables and automatic server restarts during development. 

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
- `usersmodel.mjs`: Defines the model/schema for users.

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
    Import sample data from the json files in the "sample-data" folder into a new collection within the database.

### Run the Code

    Back in the terminal, make sure you are in the project directory.
    Start the server:
    `npm start`
    Open your web browser and navigate to http://localhost:your_preferred_port to interact with the API.

Now, you have cloned the repository, imported sample data into MongoDB Compass, and started the server. You can test the API by using the provided routes and data.