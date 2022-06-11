const { Router } = require('express')
const { obtainUser, obtainOneUser, createNewUser } = require('../controllers/user.controllers')
const router = Router()

// router.get('/', sayHi)
router.get('/', obtainUser)
router.get('/:id', obtainOneUser)
router.get('/', createNewUser)



module.exports = router;