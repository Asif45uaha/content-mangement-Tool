import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    img: {
        type: String
    },
    password: {
        type: String
    }
})

const userModel = mongoose.model("Users", userSchema)
export default userModel;