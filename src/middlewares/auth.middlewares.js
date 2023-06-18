const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const {promisify} = require('util')

exports.protect = async(req, res, next) => {
  
  let token

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]
  }

  if (!token) {
    return res.status(401).json({
      status: 'error',
      message: 'You are not logged in, please login to get access'
    })
  }

  const decoded = await promisify(jwt.verify)(
    token, 
    process.env.SECRET_JWT_SEED
  )

  const user = await User.findOne({
    where: {
      id: decoded.id,
      status: 'active'
    }
  })

  if(!user) {
    return res.status(401).json({
      status: 'error',
      message: 'The owner of this token is not longer available'
    })
  }

  if(user.passwordChangedAt) {
    const changedTimeStamp = parseInt(
      user.passwordChangedAt.getTime() / 1000, 10
    )
    if(decoded.iat < changedTimeStamp) {
      return res.status(401).json({
        status: 'error',
        message: 'User recently changed password!, please try again.'
      })
    }
  }

  req.sessionUser = user

  next()
}

exports.restricTo = (...roles) => {
  return (req, res, next) => {
    if(!roles.includes(req.sessionUser.role)) {
      return res.status(403).json({
        status: 'error',
        message: 'You do not have permission to perform this action!'
      })
    }
    next()
  }
}