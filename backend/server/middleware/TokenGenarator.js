
const JWT = require("jsonwebtoken");
const TokenGenara = (ID,name) => {
    const token = JWT.sign({ ID, name }, process.env.SECRAT); 
    return token;
}
module.exports = TokenGenara;