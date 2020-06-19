"use strict";

var bcrypt = require("bcrypt");
const saltRounds = 10;

const bcryptService = {
  encrypt(password, callback) {
    bcrypt
      .genSalt(saltRounds)
      .then((salt) => {
        return bcrypt.hash(password, salt);
      })
      .then((hash) => {
        callback(hash);
      })
      .catch((err) => console.error(err.message));
  },

  decrypt(password, hash, callback) {
    return bcrypt.compare(password, hash, (err, isMatch) => {
        callback(isMatch, err);
    });
  },
};

module.exports = bcryptService;
