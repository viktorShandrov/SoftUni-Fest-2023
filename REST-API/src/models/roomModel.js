const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  members: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  messages: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Message",
    },
  ],
});

module.exports = mongoose.model("Room", schema);
