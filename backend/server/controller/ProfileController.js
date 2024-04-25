
const UserDB = require("../model/UserModel");


exports.ReadPdata = async (req, res) => {
    try {
        const { ID } = req.body;
        const data = await UserDB.updateOne({ _id: ID }, { Photo:"photo",lname:"lname",Bio:"Bio" });
        res.status(200).json({data });
    } catch (error) {
        console.log(error);
        res.status(409).json({ error });
    }
}




