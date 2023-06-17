const {body, validationResult} = require('express-validator')

const validFields = (req, res, next) => {
  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.status(400).json({
      status: 'error',
      errors: errors.mapped()
    })
  }
  next()
}

exports.createUserValidation = [
  body('name')
  .notEmpty()
  .withMessage('Name cannot be empty'),

  body('email')
  .notEmpty()
  .withMessage('Email cannot be empty')
  .isEmail()
  .withMessage('Must be a valid email'),

  body('password')
  .notEmpty()
  .withMessage('Password cannot be empty')
  .isLength({min: 8})
  .withMessage('Passwrod must be at least 8 characters'),

  validFields
]

exports.createRepairValidation = [
  body('date')
  .isDate()
  .withMessage('start must be in correct format yyyy:mm:dd hh:mm:ss'),

  body('userId')
  .isInt()
  .notEmpty()
  .withMessage('Id cannot be empty'),

  validFields
]