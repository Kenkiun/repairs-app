const express = require('express')
const router = express.Router()
const {findRepairs, createRepair, findARepair, updateRepair, deleteRepair} = require('./../controllers/repairs.controller')
const { restricTo } = require('../middlewares/auth.middlewares')
const { validRepairId } = require('../middlewares/repairs.middleware')



router.get('/', restricTo('employee'), findRepairs)
router.post('/', createRepair)

router.get('/:id', restricTo('employee'), validRepairId, findARepair)
router.patch('/:id', restricTo('employee'), validRepairId, updateRepair)
router.delete('/:id', restricTo('employee'), validRepairId, deleteRepair)

module.exports = router