import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
    {
        profile: [
            {
              user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
              }
            },
            {
              image: {
                    type: String,
                    required: true
                  }
            }
        ],
        message: {
            type: String,
            required: true
        },
        document: [
            {
             image: {       
                type: String
              },
              video: {
                type: String
              }
            }
        ],
        notification: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Notification"
        },
        status: {
            type: String,
            enum: ["UnSeen","Seen"]
        }
    },
    {timestamps: true}
)



export const Chat = mongoose.model("Chat", chatSchema)