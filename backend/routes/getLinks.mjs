import express from 'express';
import error from "../utilities/error.mjs";
import Url from "../models/urlmodel.mjs"
const router = express.Router();

  router
    .route("/")
    .get( async (req, res, next) => {
        try{
            console.log("getting all links...");
            const linksDataArray = await Url.find({})
            if(!linksDataArray){
                console.log("no links data");
                next(error(404, "Could not find links"));
            }
            else{
                console.log("allLinksData: ", linksDataArray);
                res.json(linksDataArray);
        }
        }
        catch(error){
            console.log("Error getting links: ", error)
            next(error);
        }
    })

export default router;