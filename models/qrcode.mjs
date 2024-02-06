import mongoose from "mongoose";



const model = mongoose.model;
const Schema = mongoose.Schema;



const qrcodeSchema = new Schema({
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    url: String,
    qrcode: String,
    createdAt: { type: Date, default: Date.now }
});


const Qrcode = model("Qrcode", qrcodeSchema);

export default Qrcode;