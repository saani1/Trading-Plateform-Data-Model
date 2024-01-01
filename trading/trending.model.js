import mongoose from "mongoose";

const trendingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        channels: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Channels"
        }
    },
    {timestamps: true}
)



export const Trending = mongoose.model("Trending", trendingSchema)