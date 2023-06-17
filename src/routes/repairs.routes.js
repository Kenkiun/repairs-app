const express = require('express')
const router = express.Router()
const {findRepairs, createRepair, findARepair, updateRepair, deleteRepair} = require('./../controllers/repairs.controller')
const { restricTo } = require('../middlewares/auth.middlewares')
const { validRepairId } = require('../middlewares/repairs.middleware')



router.get('/', restricTo('client'), findRepairs)
router.post('/', createRepair)

router.get('/:id', restricTo('client'), validRepairId, findARepair)
router.patch('/:id', restricTo('client'), validRepairId, updateRepair)
router.delete('/:id', restricTo('client'), validRepairId, deleteRepair)

module.exports = router