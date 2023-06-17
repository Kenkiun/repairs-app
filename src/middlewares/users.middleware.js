const User = require('../models/user.model')

exports.validUserId = async (req, res, next) => {

  const {id} = req.params

  const user = await User.findOne({
    where: {
      id
    }
  })

  if(!user) {
    return res.status(404).json({
      status: 'error',
      message: 'Error',
    });
  }
  
  req.user = user

  res.status(200).json({
    status: 'success',
    message: 'success'
  })

  
  next()
}