
const UserDB = require("../model/UserModel");
const bcrypt = require("bcrypt");
const TokenGenara = require("../middleware/TokenGenarator");
const mailSend = require("../service/MailGenarator");
//const Converter = require(".././service/imageProvider");
const Organizer = require("../lib/Organiger");

//signup controller
exports.signupUser = async (req, res) => {
    try {
        const { fname, lname, email, password, date, city, geander } = req.body;
        
        //genarate otp
        let otp = Math.round((Math.random() * 90000 )+ 10000-1);
        const hashpassword = await bcrypt.hash(password, 10);
        const user = new UserDB({
            fname: fname,
            lname: lname,
            email: email,
            password: hashpassword,
            dateofbarth: date,
            city: city,
            geander: geander,
            OTP: otp,
            Statusx: "inactive",
            Photo: "",
            follower: "0",
            following: "0",
            Bio:" ", 
        })
        let data = await user.save(user);
        //send otp 
        mailSend(email, otp);
        
        res.status(200).json({data:{ID:data._id,email:data.email ,times: Date.now()}})
    } catch (error) {
        res.status(409).json({ msg: error.message });
    }
}

//Login controller
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        let data = await UserDB.findOne({ email:email });
        console.log(data)
        if (data) {
            const isvalid = bcrypt.compare(password, data.password);
            if (isvalid) {
                const token = TokenGenara(data._id, data.email);
                res
                  .status(200)
                  .json({
                    data,
                    token,
                    userDitils: {
                      ID: data._id,
                      email: data.email,
                      times: Date.now(),
                    },
                  });
            } else {
                res.status(403).json({ msg: "worng password" });
            }
        } else {
            res.status(403).json({ msg: "user authintication faild !" });
        }
    } catch (error) {
        res.status(409).json({ mag: error.message }); 
    }
}

//OTP verification
exports.OTPviryfy = async (req, res) => {
    try {
        const { ID, otp:OTP } = req.body;
        const otp = await UserDB.findOne({ _id: ID });
        if (otp.OTP == OTP) {
           
                const token = TokenGenara(otp._id, otp.email);
                await UserDB.updateOne({ _id: otp._id }, { $set: { OTP: "", Statusx: "acctive" } });
                res.status(200).json({ token});
          
        } else {
            res.status(403).json({msg:"OTP is worng !"})
            //res.status(403).json({msg:"somthing want worng !"})
        }
    } catch (error) {
        res.status(409).json({ msg: error.message });
    }
}

exports.UserDitials = async (req, res) => {
    try { 
        
        const data = await UserDB.findOne({ _id: req.ID }, { OTP: 0, status: 0, password: 0, __v: 0, _id: 0 });
        //data.Photo = await Converter.converter(data.Photo);
        data.Photo = await Organizer.Provider(data.Photo,'jpeg');
        res.status(200).json(data);
    } catch (error) {
        res.status(409).json({ error });
        console.log(error)
    }
}


