import userModel from "../../DB/model/User.model.js";
import { asyncHandler } from "../utils/errorHandler.js";
import jwt from 'jsonwebtoken'




export const auth = asyncHandler(
    async (req, res, next) => {
        const {authorization} = req.headers

        if(!authorization) {
            return next(new Error('Please login first'))
        }

        if(!authorization.startsWith('MoSalah__')){
            return next(new Error('In-valid token'))
        }

        const token = authorization.split('MoSalah__')[1]

        let flag = false
        let decodedData

        jwt.verify(token, process.env.LOGIN_TOKEN_SIGNATURE, (err, decoded) => {
            if(err){
                flag = true
            }

            if(!flag){
                decodedData = decoded
            }

        })

        if(flag){ 
            const checkUser = await userModel.findOne({token})
            if(!checkUser){
                return next(new Error('User not found'))
            }

            const newToken = jwt.sign({id: checkUser._id}, process.env.LOGIN_TOKEN_SIGNATURE, {expiresIn: '1h'})
            checkUser.token = newToken
            checkUser.save()
            return res.send({message: 'Token Expired', token: newToken})
        }

        const user = await userModel.findById(decodedData.id)

        if(!user){
            return next(new Error('User not found'))
        }

        req.user = user
        return next()
    }
)