var mongoose = require("mongoose");

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
      enum : ['user','admin','mod'],
      default: 'user'
  },

    registered: {
        type: Date,
        default: Date.now
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
      required: true
    }
  },
  { timestamps: true }
);

module.exports = User = mongoose.model("User", UserSchema);
