import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        postImage: {
            type: String,
            required: true
        },
        postVideo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        },
        comment: {
            type: String
        }
    },
    {timestamps: true}
)



export const Post = mongoose.model("Post", postSchema)