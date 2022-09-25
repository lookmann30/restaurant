'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/db.config');

const Menus = sequelize.define('menus', {
  // Model attributes are defined here
  menus_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  menus_nameen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  menus_nameth: {
    type: DataTypes.STRING,
    allowNull: false
  },
  menus_price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  menus_image_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  menus_cdate: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },
  menus_udate: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },
}, {
  // Other model options go here
//   schema: "public",
  tableName: "menus",
  freezeTableName: true,
  timestamps: false
});

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true

module.exports = Menus