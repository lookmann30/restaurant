'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/db.config');

const User = sequelize.define('users', {
  // Model attributes are defined here
  users_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  users_uuid: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  users_username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  users_password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  users_status: {
    type: DataTypes.STRING,
    allowNull: false
  },
//   cdate: {
//     type: 'TIMESTAMP',
//     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
//     allowNull: false
//   },
//   udate: {
//     type: 'TIMESTAMP',
//     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
//     allowNull: false
//   }
}, {
  // Other model options go here
//   schema: "public",
  tableName: "users",
  freezeTableName: true,
  timestamps: false
});

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true

module.exports = User