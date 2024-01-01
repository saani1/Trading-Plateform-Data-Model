import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
    {
        channel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Channel"
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        subscriptionAmount: {
            type: Number,
            required: true
        },
        paymentMethod: [
            {
                creditCard: {
                    type: Number,
                    default: 0
                },
                debitCard: {
                    type: Number,
                    default: 0
                }
            }
        ]
    },
    {timestamps: true}
)



export const Subscription = mongoose.model("Subscription", subscriptionSchema)