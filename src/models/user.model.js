const {DataTypes} = require('sequelize')
const {db} = require('./../database/config')

const User = db.define('users', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.string,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'client',
    enum: ['client', 'employee']
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 'available'
  }
})

module.exports = User