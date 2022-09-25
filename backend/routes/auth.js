const router = require('express').Router();

var UserController = require('../contollers/UsersController');
const Verify = require('../routes/verifytoken');

/** 
 *   Auth Route
 * 
*/


//user login
router.post('/login', UserController.login);
// add users
router.post('/register', UserController.register);
// // get all user
// router.get('/', Verify, UserController.user);
module.exports = router;
