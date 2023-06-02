const express = require('express')
const router = express.Router()
const repairsController = require('./../controllers/repairs.controller')

router.route('/')
.get(repairsController.findRepairs)
.post(repairsController.createRepair)

router.route('/:id')
.get(repairsController.findARepair)
.patch(repairsController.updateRepair)
.delete(repairsController.deleteRepair)

module.exports = router