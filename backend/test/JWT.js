
const fs = require("fs");
const path = require("path");


const GIF = path.join(__dirname, './photo/OderConformation.gif');
const binarydata = fs.readFileSync(GIF);
const base64data = binarydata.toString("base64");
fs.writeFile(path.join(__dirname, './photo/Oder.txt'), base64data, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('sucess!')
    }
})

