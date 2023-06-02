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

exports.createUser = async (req, res) => {
  try {
    const {name, email, password, role} = req.body

    const user = await User.create({
      name,
      email,
      password,
      role
    })

    return res.status(201).json({
      message: 'User has been created!',
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong',
    });
  }
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