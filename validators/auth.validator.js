const Joi = require('@hapi/joi')

const signUpSchema = Joi.object({
    username: Joi.string().min(6).max(32).required(),
    email: Joi.string().max(254).email().required(),
    password: Joi.string().alphanum().min(6).max(45).required()
})

exports.ValidateSignup = (data) => {
            return signUpSchema.validate(data)
}