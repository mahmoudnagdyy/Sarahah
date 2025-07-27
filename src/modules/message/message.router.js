import { Router } from "express";
import * as messageController from './controller/message.js'
import {auth} from '../../middleware/authentication.js'
import {validation} from '../../middleware/validation.js'
import * as ms from './validation.js'

const router = Router()

router.post('/:receiverID', auth, validation(ms.sendMsg), messageController.sendMessage)

router.get('/', auth, messageController.getMessages)

router.put('/:msgID', auth, messageController.updateMessage)

router.delete('/:msgID', auth, messageController.deleteMessage)




export default router