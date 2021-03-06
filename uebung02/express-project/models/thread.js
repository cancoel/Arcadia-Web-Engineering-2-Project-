"use strict";

var mongoose = require("mongoose");

const ThreadSchema = mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  author: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "User",
    type: String
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
  },
  replies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reply",
    },
  ],
});

module.exports = mongoose.model("Thread", ThreadSchema);
