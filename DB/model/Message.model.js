import { Schema, model } from "mongoose";

const messageSchema = new Schema(
    {
        sender: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        receiver: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        message: {
            type: String,
            required: true
        },
        unknown: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
)


const messageModel = model('Message', messageSchema)
export default messageModel