import mongoose from "mongoose";

const recommendationSchema = new mongoose.Schema(
    {
        content: [
            {
                video: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Video"
                },
                post: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Post"
                }
            }
        ],
        channel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Channel"
        }
    },
    {timestamps: true}
)



export const Recommendation = mongoose.model("Recommendation", recommendationSchema)