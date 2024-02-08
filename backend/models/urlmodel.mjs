import mongoose from "mongoose";
const model = mongoose.model;
const Schema = mongoose.Schema;


//create a schema for the url
const urlSchema = new Schema({
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    url: String,
    shortUrl: String,
    createdAt: { type: Date, default: Date.now }
});

// Create an index on the 'user' field
urlSchema.index({ user: 1 });
urlSchema.index({ shortUrl: 1 });

//create a model for the url
const Url = model("Url", urlSchema);

export default Url;