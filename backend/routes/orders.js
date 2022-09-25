const router = require('express').Router();

var OrdersController = require('../contollers/OrdersController');
const Verify = require('./verifytoken');

/** 
 *   Order Route
 * 
*/


// add order
router.post('/createOrder', OrdersController.createOrder);
// update order
router.put('/updateOrder/:id', OrdersController.updateOrder);
// delete order
router.delete('/deleteOrder/:id', OrdersController.deleteOrder);
// get order by id
router.get('/:id', Verify, OrdersController.ordersById);
// get all order
router.get('/', Verify, OrdersController.orders);
module.exports = router;
