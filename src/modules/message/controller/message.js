import { asyncHandler } from "../../../utils/errorHandler.js";
import messageModel from "../../../../DB/model/Message.model.js";
import userModel from "../../../../DB/model/User.model.js";
import {sendEmail} from '../../../utils/sendEmail.js'


export const sendMessage = asyncHandler(
    async (req, res, next) => {
        const {receiverID} = req.params
        const {message, unknown} = req.body

        const checkReceiver = await userModel.findById(receiverID)
        if(!checkReceiver){
            return next(new Error('Receiver not found'))
        }

        const msg = await messageModel.create({sender: req.user._id, receiver: receiverID, message, unknown})
        const html = `
            <h1>From: ${msg.unknown ? 'Unknown' : req.user.username}</h1>
            <br>
            <h1>Message: ${msg.message}</h1>
        `
        sendEmail({to: checkReceiver.email, subject: 'New Message', html})
        return res.send({message: 'Done', msg})
    }
)

export const getMessages = asyncHandler(
    async (req, res, next) => {
        const messages = await messageModel.find({
            $or: [
                {sender: req.user._id},
                {receiver: req.user._id}
            ]
        }).populate('sender receiver')

        return res.send({message: 'Done', messages})
    }
)

export const updateMessage = asyncHandler(
    async (req, res, next) => {
        const {msgID} = req.params
        const {message, unknown} = req.body

        const msg = await messageModel.findByIdAndUpdate(msgID, {message, unknown}, {new: true})
        return msg? res.send({message: 'Done', msg}) : next(new Error('Message not found'))
    }
)

export const deleteMessage = asyncHandler(
    async (req, res, next) => {
        const {msgID} = req.params

        const msg = await messageModel.findByIdAndDelete(msgID)
        return msg? res.send({message: 'Done', msg}) : next(new Error('Message not found'))
    }
)