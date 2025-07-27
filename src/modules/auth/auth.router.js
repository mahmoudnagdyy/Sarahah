import { Router } from "express";
import * as authController from './controller/auth.js' 
import { validation } from "../../middleware/validation.js";
import * as as from './validation.js'

const router = Router()

router.post('/signup', validation(as.signup), authController.signup)

router.get('/confirmEmail/:token', authController.confirmEmail)

router.get('/reConfirmEmail/:token', authController.reConfirmEmail)

router.post('/login', validation(as.login), authController.login)


export default router