const User = require('../models/user')
const authValid = require('../validators/auth.validator')


exports.registerUser = async (req, res, next) => {
   const {error} = authValid.ValidateSignup(req.body)
   if(error) return res.status(400).json({error})
   const {email, username, password} = req.body

   const userExists = await User.findOne({where:{email: email}})
   if(userExists!==null) return res.status(400).json({ error: "User with this email already exists"})

   User.create({email, username, password})
       .then(() => {
           res.status(201).json({message: "User successfully registered", success: true})
       })
       .catch(error => {
           res.status(500).json({error})
       })
}