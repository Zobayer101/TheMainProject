const UserDB = require("../model/UserModel");

const filemanager = require(".././service/lib");

exports.ReadPdata = async (req, res) => {
  try {
    const { lname, Photo, Bio } = req.body.data;
  
    const photoPath = await filemanager.fileManager(Photo, `${Date.now()}-profile.jpeg`, req.name);
    
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
