
const UserDB = require("../model/UserModel");

const filemanager = require(".././service/lib");

exports.ReadPdata = async (req, res) => {
    try {
        const { lname, Photo, Bio } = req.body.data;
  
        filemanager.fileManager(Photo, "profile",req.name);
     
        console.log(lname, Bio);
        const data = await UserDB.updateOne({ _id: req.ID }, { Photo:"photo",lname,Bio });
        res.status(200).json({data });
    } catch (error) {
        console.log(error);
        res.status(409).json({ error });
    }
}




