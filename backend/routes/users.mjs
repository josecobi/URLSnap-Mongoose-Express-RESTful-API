import express from "express";
import error from "../utilities/error.mjs";
import User from '../models/usersmodel.mjs';
const router = express.Router();

router
    .post("/", async (req, res, next) => {
            try {
                const { username, email, password, apiKey } = req.body;
            
                //create a new instance of the User model
                const newUser = new User({
                  username,
                  email,
                  password,
                  apiKey,
                });
            
                //save the new user to the database
                const savedUser = await newUser.save();
            
                res.status(201).json(savedUser);
              } catch (error) {
                console.error(error);
                next(error(500, "Something went wrong."));
              }
        });

        export default router;
