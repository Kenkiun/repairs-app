const User = require('../models/user.model')

exports.findUsers = async (req, res) => {
  const users = await User.findAll({
      where: {
        status: 'available',
      },
    });
  
    return res.json({
      message: 'Users found',
      results: users.length,
      users,
    });
}

exports.createUser = (req, res) => {
  return res.status(200).json({
    message: 'create a user'
  })
}

exports.findAUser = (req, res) => {
  return res.status(200).json({
    message: 'find a user'
  })
}

exports.updateUser = (req, res) => {
  return res.status(200).json({
    message: 'update user'
  })
}

exports.deleteUser = (req, res) => {
  return res.status(200).json({
    message: 'delete user'
  })
}