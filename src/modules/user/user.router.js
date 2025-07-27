import { auth } from '../../middleware/authentication.js';
import * as userController from './controller/user.js'
import {validation} from '../../middleware/validation.js'
import * as us from './validation.js'
import { Router } from "express";
import { multerCloud } from '../../utils/multerCloud.js';
import { allowedExtensions } from '../../utils/multerCloud.js';
const router = Router()


router.get('/', auth, userController.getProfile)

router.put('/', auth, validation(us.updateProfile), userController.updateProfile)

router.delete('/', auth, userController.deleteUser)

router.post('/', multerCloud(allowedExtensions.image).single('profile'), auth, userController.profilePicture)

router.get('/forgetPassword/:email', userController.forgetPassword)

router.patch('/resetPassword/:token', validation(us.resetPassword), userController.resetPassword)


export default router