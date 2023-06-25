const express = require('express')
const router = express.Router()
const {findRepairs, createRepair, findARepair, updateRepair, deleteRepair} = require('./../controllers/repairs.controller')
const { validRepairId } = require('../middlewares/repairs.middleware')
const { PROTECT, restricTo } = require('../middlewares/auth.middlewares')


router.post('/', createRepair)

router.use(PROTECT)
router.get('/', restricTo("employee"), findRepairs)
router.get('/:id', restricTo("employee"), validRepairId, findARepair)
router.patch('/:id', restricTo("employee"), validRepairId, updateRepair)
router.delete('/:id', restricTo("employee"), validRepairId, deleteRepair)

module.exports = router