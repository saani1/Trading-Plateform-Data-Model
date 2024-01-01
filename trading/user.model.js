import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required:  true
        },
        dob: {
            type: Number,
            required: true
        }
        
    },
    {timestamps: true}
)



export const User = mongoose.model("User", userSchema)