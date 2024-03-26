//external import
const express = require("express");
const route = express.Router();
//internal import
const userControll = require("../controller/CreateUserContoller");
const signupValidator = require("../middleware/FormValidation");

//signpu api
route.post("/api/user/signup",signupValidator.signupVlidate,userControll.signupUser);
//login api
route.post("/api/user/login", userControll.loginUser);
//OTP verify api
route.post("/api/otp/user/verify", userControll.OTPviryfy);


module.exports = route;