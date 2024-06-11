const fsx = require("fs").promises;
const fs = require("fs");
const sherp = require("sharp");

exports.Consumer = async (file, path, names) => {
  try {
    const baseData = file.split(",")[1];
    const binData = Buffer.from(baseData, "base64");
    const imagePath = `${path}//${names}`;
    //chack alrady file exist or not
    fs.access(path, fs.constants.F_OK, (err) => {
      if (err) {
        fs.mkdir(path, (err) => {
          if (err) {
            console.log(err + 'file all ready exist so ...');
          } else {
            sherp(binData).jpeg({ quality: 70 }).toFile(imagePath);
          }
        });
      } else {
        sherp(binData).jpeg({ quality: 70 }).toFile(imagePath);
      }
      });
    return imagePath;
  } catch (error) {
    console.log(error);
  }
};

exports.Provider = async (file,format) => {
  try {
    const data = await fsx.readFile(file);
    const base64 = Buffer.from(data).toString("base64");

    return `data:image/${format};base64,${base64}`;
  } catch (error) {
    console.log(error);
  }
};
