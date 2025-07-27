import { scheduleJob } from "node-schedule";
import userModel from "../../DB/model/User.model.js";
import messageModel from "../../DB/model/Message.model.js";


export const deleteUnconfirmedUsers = () => {
    scheduleJob('0 0 23 * * 3', async() => {
        const users = await userModel.deleteMany({confirmEmail: false})
    })
}


export const deleteUserlessMessage = () => {
    scheduleJob('45 6 18 * * 0', async () => {
        const messages = await messageModel.find({})
        for (const message of messages) {
            const sender = await userModel.findById(message.sender)
            const receiver = await userModel.findById(message.receiver)

            if(!sender || !receiver){
                await messageModel.findByIdAndDelete(message._id)
            }
        }
    })

}