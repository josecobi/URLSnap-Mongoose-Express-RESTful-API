import express from 'express';
import error from "../utilities/error.mjs";
import Url from "../models/urlmodel.mjs"
const router = express.Router();

  router
    .route("/:id")
    .get( async (req, res, next) => {
        try{
            console.log("getting link by id...");
            const userId = mongoose.Types.Object(req.params.id);
            const userUrls = await Url.find({ user: userId });
            if(!userUrls){
                console.log("no link data");
                next(error(404, "Could not find link"));
            }
            else{
                console.log("userUrls: ", userUrls);
                res.json(userUrls);
            }
        }
        catch(error){
            console.log("Error getting link by id: ", error);
            next(error);
        }
    });

export default router;