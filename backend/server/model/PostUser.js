
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    PosterID: {
        type: mongoose.Types.ObjectId,
        ref:"User"
    },
    Image: {
        type: String,
        
    },
    postText:String,
    like: String,
    LikeID: [
        {
            type: mongoose.Types.ObjectId,
            ref:"user"
        }
    ],
    Comment: String,
    CommentID: [
        {
            type: mongoose.Types.ObjectId,
            ref:"User"
         }
    ],
    Time: {
        type: String,
        default: new Date()
    },
    
}, {
    timestamps:true,
})

const PostUser = mongoose.model("PostUsers", schema);

module.exports = PostUser;