'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/db.config');

const Menus = sequelize.define('orders', {
  // Model attributes are defined here
  orders_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  orders_detail: {
    type: DataTypes.JSONB,
    allowNull: false
  },
  orders_status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  orders_total_price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  users_uuid: {
    type: DataTypes.UUID,
    allowNull: false
  },
  orders_cooking_status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  orders_cdate: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },
  orders_udate: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },
}, {
  // Other model options go here
//   schema: "public",
  tableName: "orders",
  freezeTableName: true,
  timestamps: false
});

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true

module.exports = Menus