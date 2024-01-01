import mongoose from "mongoose";

const trailSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
)



export const Trail = mongoose.model("Trail", trailSchema)