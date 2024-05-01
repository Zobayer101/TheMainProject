const fs = require("fs");
const sharp = require("sharp");

exports.fileManager = async(Photo, Name, mail) => {
  try {
    const RealData = Photo.split(",")[1];
    const BinaryData = Buffer.from(RealData, "base64");
    const folderPath = `C://Users//mdzob//Desktop//media//backend//storage//photo//${mail}`;
    const imagepath = `${folderPath}/${Date.now()}-${Name}`;
    //reduce image qualitey
    
    
    
   // const outbase64 = sharpImage.toString('base64');
    //chack alrady file exgist  or not
    fs.access(folderPath, fs.constants.F_OK, (err) => {
      if (err) {
        console.log("404 not found ");
        //create a new file
        fs.mkdir(folderPath, (err) => {
          if (err) {
            console.log(err);
          } else {
              sharp(BinaryData).jpeg({ quality: 50 }).toFile(imagepath);
           // fs.writeFileSync(imagepath, outbase64, "base64");
            console.log("ok");
          }
        });
      } else {
         sharp(BinaryData).jpeg({ quality: 50 }).toFile(imagepath);
        //fs.writeFileSync(imagepath, outbase64, "base64");
        console.log("All is well");
      
      }
    });

   
    return imagepath;
  } catch (error) {
    console.log(error);
  }
};
