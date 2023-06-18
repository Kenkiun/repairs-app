const express = require('express')
const router = express.Router()
const {findRepairs, createRepair, findARepair, updateRepair, deleteRepair} = require('./../controllers/repairs.controller')
const { validRepairId } = require('../middlewares/repairs.middleware')

const auth = require('./../middlewares/auth.middlewares')

router.post('/', createRepair)

router.use(auth.protect, auth.restricTo("employee"));

router.get('/',  findRepairs)
router.get('/:id', validRepairId, findARepair)
router.patch('/:id', validRepairId, updateRepair)
router.delete('/:id', validRepairId, deleteRepair)

module.exports = router;