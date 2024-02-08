import mongoose from "mongoose";


const model = mongoose.model;
const Schema = mongoose.Schema;
//create a schema for the user model and add validation
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    //add default value for api key for testing
    apiKey: {
        type: String,
        default: "example",
        required: true
    },
    //reference to the links and qrcodes models
    links: [{ type: Schema.Types.ObjectId, ref: 'Url' }],
    qrcodes: [{ type: Schema.Types.ObjectId, ref: 'Qrcode' }]
});


const User = model("User", userSchema);


export default User;