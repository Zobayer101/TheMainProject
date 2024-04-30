
const fs = require("fs");

exports.fileManager = async (Photo, Name,mail) => {
    try {
        const RealData = Photo.split(",")[1];
        const BinaryData = Buffer.from(RealData, "base64");
        const folderPath = `C://Users//mdzob//Desktop//media//backend//storage//photo//${mail}`;
        //chack alrady file exgist  or not 
        fs.access(folderPath, fs.constants.F_OK, (err) => {
            if (err) {
                console.log("404 not found ");
                //create a new file
                fs.mkdir(folderPath, (err) => {
                  if (err) {
                    console.log(err);
                  } else {
                      fs.writeFile()
                    console.log("ok");
                  }
                });
            } else {
                console.log("All is well");
            }
        });
         
        console.log(RealData);
        
        console.log(__dirname);

    } catch (error) {
        console.log(error)
    }
}


