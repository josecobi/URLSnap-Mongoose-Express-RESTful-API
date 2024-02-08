import express from 'express';
import error from "../utilities/error.mjs";
import Qrcode from "../models/qrcode.mjs"
const router = express.Router();

  router
    .route("/")
    .get( async (req, res, next) => {
        try{
            console.log("getting all QR Codes...");
            const qrcodesDataArray = await Qrcode.find({})
            if(!qrcodesDataArray){
                console.log("no QR Code data");
                next(error(404, "Could not find Qr Codes"));
            }
            else{
                console.log("allQR Codes Data: ", qrcodesDataArray);
                res.json(qrcodesDataArray);
            }
        }
        catch(error){
            console.log("Error getting QR Codes: ", error)
            next(error);
        }
    })

export default router;