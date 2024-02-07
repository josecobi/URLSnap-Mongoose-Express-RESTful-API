import mongoose from "mongoose";

const model = mongoose.model;
const Schema = mongoose.Schema;

const apikeySchema = new Schema({
    apiKey: String
});

const Apikey = model("Apikey", apikeySchema);

export default Apikey;

