const User = require('../models/user')
const authValidator = require('../validators/auth.validator')

exports.registerUser = async (req, res, next) => {
    const {error} = authValidator.validateSignupData(req.body)
    if(error) return res.status(400).json({error})

    const { email, username, password } = req.body
    const userExists = await User.findOne({where:{email}})
    if(userExists) return res.status(400).json({error: "User with this email already exists", success: false})

    User.create({email, password, username})
        .then(() => {
            res.status(201).json({message: "User has been successfully registered", success: true})
        })
        .catch(error => {
            res.status(500).json({error})
        })
}