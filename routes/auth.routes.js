const router = require('express').Router()
const authController = require('../controllers/auth.controller')

router.post('/user/signup', authController.registerUser)

module.exports = router