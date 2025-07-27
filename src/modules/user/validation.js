import Joi from "joi";



export const updateProfile = Joi.object({
    name: Joi.string().min(3).max(50),
    username: Joi.string().alphanum().min(3).max(50),
    email: Joi.string().email(),
    password: Joi.string().min(8),
    confirmPassword: Joi.string().valid(Joi.ref('password'))
}).required()


export const resetPassword = Joi.object({
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required()
}).required()