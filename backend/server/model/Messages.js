const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    ConversationId: {
      type: mongoose.Types.ObjectId,
      ref: "Conversation",
    },
    SenderId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    ResiverId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
        },
        messages: String,
        photo: String,
        voice: String,
      Video:String,
  },
  {
    timestamps: true,
  }
);

const MSG = mongoose.model("Msg", schema);

module.exports = MSG;
