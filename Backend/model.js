import mongoose from "mongoose";

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    dob:Date,
    address: String,
    zipCode: String,
    phone: String,
    city: String,
    state: String
});

const userModel =new mongoose.model("signindata", schema);

export default userModel;