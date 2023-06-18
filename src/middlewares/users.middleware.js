const User = require('../models/user.model')

exports.validUserId = async (req, res, next) => {

  const {id} = req.params

  const user = await User.findOne({
    where: {
      id
    }
  })
  
  req.user = user

  next()
}