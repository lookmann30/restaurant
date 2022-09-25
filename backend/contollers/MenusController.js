'use strict';

const Menus = require('../models/menus');//load Menus model
const response = require('../utils/response'); //Response Text

module.exports = {

  /**
   * GET ALL MODULE
   */
   menus: async (req, res) => {
    let menu = '';
    try {
        //if have filter data
        if (req.query) {
            menu = await Menus.findAll({ where: req.query });
        } else {
            menu = await Menus.findAll();
        }
        return res.status(res.statusCode).json(response.responseSuccess("success", menu));
    } catch (err) {
        return res.status(204).json(response.responseError(err, ''));
    }
},
}