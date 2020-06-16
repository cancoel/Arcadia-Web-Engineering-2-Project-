"use strict";

var mongoose = require("mongoose");
// var UserMessage = require("../models/messages.js").schema;
// var schemaMessage = require("../models/messages.js").schema;

var UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      minlength: 4,
      maxlength: 10,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
      index: true,
    },

    userType: {
      type: String,
      enum: ["user", "admin", "mod"],
      default: "user",
    },

    registered: {
      type: Date,
      default: Date.now,
    },

    email: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
    },
    bio: String,
    image: String,
    password: {
      type: String,
      required: true,
    },
    messages:  [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Messages',
      },
    ],
    threads: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thread',
      },
    ],
    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reply',
      },
    ]
  },

  { timestamps: true }
);

module.exports = mongoose.model("Users", UserSchema)  