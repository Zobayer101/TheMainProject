
const UserDB = require("../model/UserModel");


exports.ReadPdata = async (req, res) => {
    try {
        const { ID } = req.body;
        const data = await UserDB.find({ _id: ID }, { OTP: 0, password: 0, Statusx: 0 });
        res.status(200).json({ data });
    } catch (error) {
        console.log(error);
        res.status(409).json({ error });
    }
}




