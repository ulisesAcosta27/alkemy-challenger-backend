const { Router } = require('express')
const { obtainUser, obtainOneUser } = require('../controllers/user.controllers')
const router = Router()

// router.get('/', sayHi)
router.get('/', obtainUser)
router.get('/:id', obtainOneUser)


module.exports = router;