// src/domains/user/user.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const User = sequelize.define('User', {
  user_id : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role : {
     type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = User;
