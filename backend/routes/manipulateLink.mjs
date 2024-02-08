import express from "express";
import {nanoid} from "nanoid";
import error from "../utilities/error.mjs";
import Url from '../models/urlmodel.mjs';
import {ObjectId} from 'mongodb';
const router = express.Router();


router
    .route("/:id")
        .delete(async (req, res, next) => {
            try{
                const id = new ObjectId(req.params.id);
                // Find url by Id and delete it
                const linkToDelete = await Url.findByIdAndDelete(id);
                res.json({ message: `Deleted url with ID ${id}`, shortUrl: linkToDelete });
            }
            catch(error){
                console.error("Link not found.", error);
                next(error(404, "Link not found."));
            }
        })
        .put(async (req, res, next) => {           
            try{
                const id = new ObjectId(req.params.id);
                // Find url by Id and delete it
                const linkToUpdate = await Url.findByIdAndUpdate(id, { shortUrl: nanoid(5) });
                res.json({ message: `Updated url with ID ${id}`, shortUrl: linkToUpdate });
            }
            catch(error){
                console.error("Link not found. ", error);
                next(error(404, "Link not found."));
            }           
        });
        

export default router;