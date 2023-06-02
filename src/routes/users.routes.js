const express = require('express')
const router = express.Router()
const usersController = require('./../controllers/users.controller')


router.route('/')
.get(usersController.findUsers)
.post(usersController.createUser)

router.route('/:id')
.get(usersController.findAUser)
.patch(usersController.updateUser)
.delete(usersController.deleteUser)

module.exports = router