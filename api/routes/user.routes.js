const { Router } = require('express')
const { sayHi } = require('../controllers/user.controllers')
const router = Router()

router.get('/', sayHi)


module.exports = router;