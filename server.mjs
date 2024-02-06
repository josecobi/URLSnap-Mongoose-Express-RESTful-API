import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import User  from './models/usersmodel.mjs';
import Url from './models/urlmodel.mjs';
import Qrcode from './models/qrcode.mjs';
const app = express();

await mongoose.connect(process.env.ATLAS_URI);

app.get("/", (req, res) => {
    res.status(200).send("<h1>Wellcome to the urlShortner</h1>");
});

app.post("/users", async (req, res) => {
const users = await User.find({});
    res.status(200).send(users);
})

app.listen(process.env.PORT, () =>{
    console.log(`Server running on port: ${process.env.PORT}`);
});

