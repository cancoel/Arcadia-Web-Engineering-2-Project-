"use strict";

var mongoose = require("mongoose");
// var UserSchema = require("./users");

const ReplySchema = mongoose.Schema({
  author: {
    required: true,
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

module.exports = mongoose.model("Reply", ReplySchema);
