const express = require('express')
const router = express.Router()
const {findUsers, createUser, findAUser, updateUser, deleteUser, login} = require('../controllers/users.controller')
const { validUserId } = require('../middlewares/users.middleware')
const { PROTECT, restricTo, protectAccountOwner } = require('../middlewares/auth.middlewares')



router.post('/create', createUser)
router.post('/login', login)

router.use(PROTECT)
router.get('/', restricTo('employee'), findUsers)
router.get('/:id', restricTo('employee'), validUserId, findAUser)
router.patch('/:id', validUserId, protectAccountOwner, updateUser)
router.delete('/:id', validUserId, protectAccountOwner, deleteUser)

module.exports = router