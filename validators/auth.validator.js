const Joi = require('@hapi/joi')

const signupSchema = Joi.object({
    username: Joi.string().min(6).max(32).required(),
    password: Joi.string().min(6).max(44).alphanum().required(),
    email: Joi.string().email().required()
})

exports.validateSignupData = (data) => {
    return signupSchema.validate(data)
}