const { Router } = require('express')
const { sayHi, obtainUser, obtainOneUser, createNewUse } = require('../controllers/user.controllers')
const router = Router()

router.get('/', sayHi)
router.get('/', obtainUser)
router.get('/:id', obtainOneUser)
router.post('/', createNewUse)


module.exports = router;