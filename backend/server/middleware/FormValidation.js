const UserDB = require("../model/UserModel");

//signup form validate
exports.signupVlidate = async (req, res, next) => {
  try {
    let regex = /\S+@\S+\.\S+/;
      const { fname, lname, email, password, date, gendar } = req.body;
     
    if (fname.length < 2) {
      throw new Error("fname is unvalid");
    } else if (lname.length < 3) {
      throw new Error("lname is unvalid");
    }  else if (!regex.test(email)) {
        throw new Error("worng email");

    } else if (password.length < 5) {
      throw new Error("password is wrong");
    } else if (!date) {
      throw new Error("date is required");
    } else if (!gendar) {
      throw new Error("gendar is required");
    } else if (regex.test(email)) {
      const emaildata = await UserDB.find({ email: email });
      console.log(emaildata);
      if (emaildata[0]) {
        throw new Error("Thsi email alrady use");
      } else {
          next();
        }
        
    } else {
      next();
    }
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
};




