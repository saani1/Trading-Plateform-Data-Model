import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        shortDescription: {
            type: String,
            required
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        status: {
            type: String,
            enum: ["UnSeen","Seen"]
        }
    },
    {timestamps: true}
)



export const Notification = mongoose.model("Notification", notificationSchema)