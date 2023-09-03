// src/domains/user/user.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Pegawai = sequelize.define('pegawais', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
  }
});

module.exports = Pegawai;
