const { Router } = require('express')
const passport = require('passport')

const { loginUser } = require('../controllers/login.controllers')
const { createNewUser } = require('../controllers/user.controllers')

const router = Router()

router.post('/login', passport.authenticate('local'), loginUser)
router.post('/signup', createNewUser)

module.exports = router;