'use strict';

const Orders = require('../models/orders');//load Menus model
const Auth = require('../models/auth');//load Menus model
const response = require('../utils/response'); //Response Text

module.exports = {

    /**
     * GET ALL MODULE
     */
    orders: async (req, res) => {
        let order = '';
        try {
            Auth.hasMany(Orders, { foreignKey: 'users_uuid' })
            Orders.belongsTo(Auth, { foreignKey: 'users_uuid', targetKey: 'users_uuid' })
            order = await Orders.findAll({
                include: [{
                    model: Auth,
                    required: true
                }]
            });
            return res.status(res.statusCode).json(response.responseSuccess("success", order));
        } catch (err) {
            return res.status(204).json(response.responseError(err, ''));
        }
    },
    /**
      * GET BY ID
      */
    ordersById: async (req, res) => {
        let order = '';
        try {
            const orderID = req.params.id;
            order = await Orders.findOne({ where: { orders_id: orderID } });
            return res.status(res.statusCode).json(response.responseSuccess("success", order));
        } catch (err) {
            return res.status(204).json(response.responseError(err, ''));
        }
    },
    /**
   * CREATE MODULE
   */
    createOrder: async (req, res) => {
        //Request post data with JSON
        let reqData = req.body;
        try {
            //add order
            await Orders.create(reqData);

        } catch (err) {
            return res.status(400).json(response.responseError(err.message, ''))
        }

        return res.status(res.statusCode).json(response.responseSuccess("Create Order success", ''))
    },
    /**
    * Delete order
    * link : orders/:id
    */
    deleteOrder: async (req, res) => {
        try {
            //delete submenu
            const orderObj = await Orders.destroy({ where: { orders_id: req.params.id } });
            if (!orderObj) { return res.status(400).send(response.responseError('Order is not found', '')) }
            else {
                return res.status(200).send(response.responseSuccess(`Delete id = ${req.params.id} Success`, ''));
            }
        } catch (err) {
            return res.status(500).json(response.responseError(err, ''))
        }
    },
    /** 
   * update order 
   * link : /orders/:id
   */
    updateOrder: async (req, res) => {
        let reqData = req.body;
        console.log(reqData)
        try {

            //update order detail
            const orderObj = await Orders.update(reqData, { where: { orders_id: req.params.id } })

            if (!orderObj[0]) { return res.status(400).send(response.responseError('Order is not found', '')) }
            else return res.status(200).send(response.responseSuccess(`Update id = ${req.params.id} Success`, ''));
        } catch (err) {
            return res.status(500).json(response.responseError(err, ''))
        }
    },
}