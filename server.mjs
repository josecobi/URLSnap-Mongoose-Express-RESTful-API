import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

const app = express();

await mongoose.connect(process.env.ATLAS_URI);

app.get("/", (req, res) => {
    res.status(200).send("<h1>Wellcome to the urlShortner</h1>");
})


app.listen(process.env.PORT, () =>{
    console.log(`Server running on port: ${process.env.PORT}`);
}) ;

