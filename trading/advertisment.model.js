import mongoose from "mongoose";

const advertismentSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        video: {
            type: String,
            required
        },
        channel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Channel"
        }
    },
    {timestamps: true}
)



export const Advertisment = mongoose.model("Advertisment", advertismentSchema)