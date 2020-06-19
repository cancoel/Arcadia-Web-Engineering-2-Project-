"use strict";

var bcryptService = require("./bcrypt");
var User = require("../models/users.js");
var jwt = require("jsonwebtoken");
var config = require("../config/default.json");
const { response, request } = require("../app");

const userService = {
  getUser(username, password, callback) {
    // Get User from mongoose data-access-layer
    User.findOne({ username })
      .then((user) => {
        // compare passed password and password from user in DB
        bcryptService.decrypt(password, user.password, callback);
      })
      .catch((error) => callback(false, error));
  },

  createToken(username, callback) {
    console.log(config.session.token);
    const jwtExpirySeconds = 30;
    const token = jwt.sign({username}, config.session.token, {
      algorithm: "HS256",
      expiresIn: jwtExpirySeconds,
    });
    return callback(token);
  },
};

module.exports = userService;
