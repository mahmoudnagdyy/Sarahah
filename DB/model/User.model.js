import { Schema, model } from "mongoose";
import { type } from "os";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        username:{
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        confirmEmail: {
            type: Boolean,
            default: false
        },
        password: {
            type: String,
            required: true
        },
        profilePicture: {
            public_id: String,
            secure_url: String
        },
        token: String
    },
    {
        timestamps: true
    }
)

const userModel = model('User', userSchema)


export default userModel