const router = require('express').Router();
var MenusController = require('../contollers/MenusController');
const Verify = require('./verifytoken');

/** 
 *   Menus Route
 * 
*/

// get all menu
router.get('/', Verify, MenusController.menus);
module.exports = router;
