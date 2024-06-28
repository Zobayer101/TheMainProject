const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    CreateorId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    PaticipatorId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    Date: {
      type: String,
      default: new Date().toLocaleString(),
    },
  },
  {
    timestamps: true,
  }
);

const DBcomversation = mongoose.model("Conversation", schema);

module.exports = DBcomversation;
