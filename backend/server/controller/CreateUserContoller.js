
const UserDB = require("../model/UserModel");
const bcrypt = require("bcrypt");
const TokenGenara = require("../middleware/TokenGenarator");
const mailSend = require("../service/MailGenarator");

//signup controller
exports.signupUser = async (req, res) => {
    try {
        const { fname, lname, email, password, date, city, geander } = req.body;
        console.log(req.body);
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
            Statusx:"inactive"
        })
        let data = await user.save(user);
        //send otp 
        mailSend(email, otp);
        
        res.status(200).json({data:{ID:data._id,email:data.email}})
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
                const token = TokenGenara(data._id, data.fname);
                res.status(200).json({ data, token });
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
        const { ID, OTP } = req.body;
        const otp = await UserDB.findOne({ _id: ID });
        
        if (otp&&OTP) {
            if (otp.OTP == OTP) {
                const token = TokenGenara(otp._id, otp.fname);
                await UserDB.updateOne({ _id: otp._id }, { $set: { OTP: "", Statusx: "acctive" } });
                res.status(200).json({ token,ok:"" });
            } else {
                
                res.status(403).json({msg:"OTP is worng !"})
            }
        } else {
            res.status(403).json({msg:"somthing want worng !"})
        }
    } catch (error) {
        res.status(409).json({ msg: error.message });
    }
}
