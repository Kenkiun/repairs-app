const express = require('express')
const router = express.Router()
const {findUsers, createUser, findAUser, updateUser, deleteUser, login} = require('../controllers/users.controller')
const { validUserId } = require('../middlewares/users.middleware')



router.get('/', findUsers)
router.post('/create', createUser)
router.post('/login', login)

router.get('/:id', validUserId, findAUser)
router.patch('/:id', validUserId, updateUser)
router.delete('/:id', validUserId, deleteUser)

module.exports = router