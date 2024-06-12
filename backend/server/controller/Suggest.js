const PostUser = require("../model/PostUser");
const Organizer = require("../lib/Organiger");

exports.userPostSuggest = async (req, res) => {
  try {
    const postData = await PostUser.find().populate("PosterID", [
      "Photo",
      "fname",
    ]);
    const DataObj = [];
    for (let i = 0; i < postData.length; i++) {
      const {
        Time,
        postText,
        Image,
        PosterID: { fname, Photo },
      } = postData[i];

      DataObj[i] = {
        names: fname,
        profile: await Organizer.Provider(Photo, `jpeg`),
        poster: await Organizer.Provider(Image, "jpeg"),
        text: postText,
        time: Time,
      };
    }
    res.status(200).json(DataObj);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
