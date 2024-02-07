import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import User  from './backend/models/usersmodel.mjs';
import Url from './backend/models/urlmodel.mjs';
import Qrcode from './backend/models/qrcode.mjs';
import ejs from "ejs";
const app = express();

await mongoose.connect(process.env.ATLAS_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.on("open", () => {
    console.log("Database connected");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//set EJS engine
app.set("view engine", "ejs");
app.set("views", "./backend/views");
//serve static files
app.use(express.static("frontend"));

//middleware to check for API keys!
app.use("/api", function (req, res, next) {
  var key = req.headers["x-api-key"];
  console.log("key: ", key);
  console.log("apikeys data:", apiKeysData);
  // Check for the absence of a key.
  if (!key) next(error(400, "API Key Required"));
  
  // Check for key validity.
  if (apiKeysData.indexOf(key) === -1) next(error(401, "Invalid API Key"));

  // Valid key! Store it in req.key for route access.
  req.key = key;
  next();
});


// Use routes
app.use("/apikey", apiKeysRoute);
app.use("/api/shortenUrl", shortenUrl);
app.use("/api/getLinks", getLinks);
app.use("/api/manipulateLink", manipulateLink);
app.get("/", (req, res) => {
    res.status(200).render("index");
});

app.get("/users", (req, res) => {
  res.status(200).render("users");
});

app.get("/links", (req, res) => {
  res.status(200).render("links");
});
app.get("/qrcodes", (req, res) => {
  res.status(200).render("qrcodes");
});
// app.get("/allusers", async (req, res) => {
// const users = await User.find({});
//     res.status(200).send(users);
// })

// app.get("/allurls", async (req, res) => {
//     const urls = await Url.find({});
//     res.status(200).send(urls);
    
// });

// app.get("/allqrcodes", async (req, res) => {
//     const qrcodes = await Qrcode.find({});
//     res.status(200).send(qrcodes);
// });

// 404 Middleware
app.use((req, res, next) => {
  next(error(404, "Resource Not Found"));
});
// Error-handling middleware.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(process.env.PORT, () =>{
    console.log(`Server running on port: ${process.env.PORT}`);
});

