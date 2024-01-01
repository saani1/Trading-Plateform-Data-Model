import mongoose from "mongoose";

const channelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            required: true
        },
        content: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        },
        contact: [
            {
                number: {
                    type: String
                },
                email: {
                    type: String
                },
                media: {
                    type: String
                }
            }
        ],
        subscriberQuantity: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subscription"
        }
    },
    {timestamps: true}
)



export const Channel = mongoose.model("Channel", userSchema)