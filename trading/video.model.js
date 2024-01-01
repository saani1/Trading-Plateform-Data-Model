import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
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
        },
        comment: {
            type: String
        }
    },
    {timestamps: true}
)



export const Video = mongoose.model("Video", videoSchema)