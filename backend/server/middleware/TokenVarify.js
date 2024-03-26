
const JWT = require("jsonwebtoken");

const TokenVarify = async (req, res, next) => {
    try {
        const { token } = req.body;
        const decode = JWT.verify({ token }, process.env.SECRAT);
        req.body = decode.userName;
        req.body = decode.userID;
        next();
    } catch (error) {
        res.status(409).json({msg: "user Authtication faild!" })
    }
}

module.exports = TokenVarify;
