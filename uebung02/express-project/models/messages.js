"use strict";

var mongoose = require("mongoose");

var UserMessage = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Messages", UserMessage);
