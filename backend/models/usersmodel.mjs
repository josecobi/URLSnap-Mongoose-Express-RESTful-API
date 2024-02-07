import mongoose from "mongoose";


const model = mongoose.model;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    apiKey: String,
    links: [{ type: Schema.Types.ObjectId, ref: 'Url' }],
    qrcodes: [{ type: Schema.Types.ObjectId, ref: 'Qrcode' }]
});


const User = model("User", userSchema);


export default User;