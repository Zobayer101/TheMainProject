
const JWT = require("jsonwebtoken");

const TokenVarify = async (req, res, next) => {
    try {
        const { token } = req.headers;
        const decode = JWT.verify( token , process.env.SECRAT);
        req.name = decode.name;
        req.ID = decode.ID;
       
        next();
    } catch (error) {
        res.status(409).json({ msg: "user Authtication faild!" })
        //console.log(error.message)
    }
}

module.exports = TokenVarify;
