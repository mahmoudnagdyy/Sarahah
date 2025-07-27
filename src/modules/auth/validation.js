import Joi from "joi";


export const signup = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    username: Joi.string().alphanum().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required()
}).required()


export const login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
}).required()