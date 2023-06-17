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