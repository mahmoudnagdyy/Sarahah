import Joi from "joi";



export const sendMsg = Joi.object({
    message: Joi.string().min(10).required(),
    unknown: Joi.boolean()
}).required()