//external import
const express = require("express");
const route = express.Router();
//internal import
const userControll = require("../controller/CreateUserContoller");
const signupValidator = require("../middleware/FormValidation");
const Gard = require("../middleware/TokenVarify");
const ProfileController = require("../controller/ProfileController");
const Suggest = require("../controller/Suggest");

//signpu api
route.post("/api/user/signup",signupValidator.signupVlidate,userControll.signupUser);
//login api
route.post("/api/user/login", userControll.loginUser);
//OTP verify api
route.post("/api/otp/user/verify", userControll.OTPviryfy);
//read all user data
route.get("/api/user/retrive",Gard,userControll.UserDitials);

//update profile data
route.put("/api/user/profiledata", Gard, ProfileController.ReadPdata);

//post user contents..
route.post("/api/postusers", Gard, userControll.UserPost);

//post suggest for user...
route.get("/api/user/suggest", Gard, Suggest.userPostSuggest);

module.exports = route;