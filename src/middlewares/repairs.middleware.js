const Repair = require('../models/repair.model')

exports.validRepairId = async (req, res, next) => {

  const {id} = req.params

  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending'
    }
  })

  if(!repair) {
    return res.status(404).json({
      status: 'error',
      message: 'Error',
    });
  }

  res.status(200).json({
    status: 'success',
    message: 'success'
  })

  
  next()
}