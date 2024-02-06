import mongoose from "mongoose";

const model = mongoose.model;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    apiKey: String,
    links: [Url],
    qrcodes: [Qrcode]
});

const urlSchema = new Schema({
    user: [User],
    url: String,
    shortUrl: String,
    createdAt: { type: Date, default: Date.now }
});

const uqrcodeSchema = new Schema({
    user: [User],
    url: String,
    qrcode: String,
    createdAt: { type: Date, default: Date.now }
});

const User = model("User", userSchema);
const Url = model("Url", urlSchema);
const Qrcode = model("Qrcode", qrcodeSchema);

export {User, Url, Qrcode};