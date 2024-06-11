const UserDB = require("../model/UserModel");

//const filemanager = require(".././service/lib");
const Organization = require("../lib/Organiger");
exports.ReadPdata = async (req, res) => {
  try {
    const { lname, Photo, Bio } = req.body.data;
    const path = `C://Users//mdzob//Desktop//media//backend//storage//photo//${req.name}`;
    const photoPath = await Organization.Consumer(Photo, path,`${Date.now()}-profile.jpeg`);
    console.log(photoPath);
    const data = await UserDB.updateOne(
      { _id: req.ID },
      { Photo: photoPath, lname, Bio }
    );

    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.status(409).json({ error });
  }
}; 
