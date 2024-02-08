import express from "express";
const router = express.Router();
import Apikey from "../models/apikeymodel.mjs";
import error from "../utilities/error.mjs";

//middleware to check for API keys 
const api = router.use("/api", async function (req, res, next) {
    try{
    const apiKeysData = await Apikey.find({});
    let key = req.headers["x-api-key"];
    console.log("key: ", key);
    console.log("apikeys data:", apiKeysData);
    // Check for the absence of a key.
    if (!key) next(error(400, "API Key Required"));
    
    // Check for key validity.
    if (apiKeysData.indexOf(key) === -1) next(error(401, "Invalid API Key"));
  
    // If valid key, store it in req.key for route access.
    req.key = key;
    next();
    }
    catch(error){
        console.error("Error fetching API keys:", error);
        next(error);       
    }
});

export default api;
