const router =  require('express').Router()
const authController = require('../controllers/auth.controllers')

router.post('/user/signup', authController.registerUser)

module.exports = router
