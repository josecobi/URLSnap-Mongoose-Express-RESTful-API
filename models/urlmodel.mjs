import mongoose from "mongoose";



const model = mongoose.model;
const Schema = mongoose.Schema;



const urlSchema = new Schema({
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    url: String,
    shortUrl: String,
    createdAt: { type: Date, default: Date.now }
});


const Url = model("Url", urlSchema);

export default Url;