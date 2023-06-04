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

exports.findAUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `The user with id: ${id} doesn't exist`,
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'User found',
      user
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
}

exports.updateUser = async (req, res) => { 
  try {
    const {id} = req.params;
    const { name, email } = req.body;

    const user = await User.findOne({
      where: {
        id,
        status: 'available',
      },
    });

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `User with id: ${id} doesn't exist`,
      });
    }

    await user.update({name, email});

    res.status(200).json({
      status: 'success',
      message: 'User has been updated',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    
    const user = await User.findOne({
      where: {
        status: 'available',
        id,
      },
    });
    
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `User with id: ${id} doesn't exist!`,
      });
    }
    
    await user.update({ status: 'unavailable' })

    return res.status(200).json({
      status: 'success',
      message: `the user's account has been disabled!`,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
}