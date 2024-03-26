
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: {
        type: String,
        unique: true,
        require: true,
        trim:true
    },
    password: {
        type: String,
        require: true,
    },
    dateofbarth: String,
    city: String,
    geander: String,
    createDate: {
        type: String,
        
      default:  Date().toLocaleString()
    },
    OTP: String,
    Statusx:String,
}, {
    timestamps: true,
});

const UserDB = mongoose.model('User', schema);
module.exports = UserDB;