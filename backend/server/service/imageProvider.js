const fs = require("fs").promises;

exports.converter = async (photo) => {
    try {
        const data= await fs.readFile(photo)
        const Base64 = Buffer.from(data).toString("base64");
        return `data:image/jpeg;base64,${Base64}`;
    } catch (err) {
        console.log(err);
    }
}

