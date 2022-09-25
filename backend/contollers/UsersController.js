'use strict';

const User = require('../models/auth');//load user model
const bcrypt = require('bcryptjs'); //Password encryp/decrypt
const response = require('../utils/response'); //Response Text
const jwt = require('jsonwebtoken'); //JSON web token

module.exports = {

  /**
   * LOGIN MODULE
   */
  login: async (req, res) => {
    
    //Checking username is exist
    const user = await User.findOne({ where: { users_username: req.body.users_username } });
    if (!user) { return res.status(401).json(response.responseError('Username is not found', '')) }
    console.log(user)
    //Compare Password
    const validPass = await bcrypt.compare(req.body.users_password,user.users_password);
     //Checking password invalid
    if (!validPass) { return res.status(401).json(response.responseError('Invalid password', '')) }

    //Create and assign token
    const token = jwt.sign({ _id: user.users_id,username: user.users_username},process.env.SECRET_KEY);
  
    return res.status(res.statusCode).json(response.responseSuccess("Loggined", {"username": req.body.users_username,"token" : token, "uuid": user.dataValues.users_uuid}))
  },
/**
   * REGISTER MODULE
   */
 register: async (req, res) => {

  //checking username is already in db
  // const usernameExist = await User.findOne({ where: { username: req.body.username } });
  // if (usernameExist) { return res.status(400).json(response.responseError('Username already exists', '')) }

  //Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.users_password, salt);

  //Request post data with JSON
  let reqData = req.body;
  reqData.users_password = hashPassword;
  console.log(reqData)
  try {
    const registerUser = await User.create(reqData);
    
  } catch (err) {
    return res.status(400).json(response.responseError(err.message, ''))
  }

  return res.status(res.statusCode).json(response.responseSuccess("Create success", ''))
},

}