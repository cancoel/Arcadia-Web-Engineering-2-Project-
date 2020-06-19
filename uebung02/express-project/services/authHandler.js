"use strict";

var authHandler = require("express").Router();
var userService = require("./userService");
const { token } = require("morgan");
var jwt = require("jsonwebtoken");
var config = require("../config/default.json");

authHandler.use((request, response, next) => {
  console.log("Header", request.headers.authorization);
  if (
    !request.headers.authorization ||
    request.headers.authorization.indexOf("Basic ") === -1
  ) {
    response.statusCode = 401;
    response.setHeader("WWW-Authenticate", 'Basic realm="Secure Area"');
    return response.json({
      message: "Missing Authorization Header Gib die daten",
    });
  }

  // Base64 decoding
  const base64Credentials = request.headers.authorization.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "ascii"
  );
  const [username, password] = credentials.split(":");

  // Authenticate base64-decoded username and password
  userService.getUser(username, password, (isMatch, error) => {
    if (isMatch) {
      const token = userService.createToken(username);
      response.setHeader("jwt-token", token);
      response.status(200).json("Token created");
      console.log(token);
    }
  });
});

authHandler.isAuthenticated = (req, res, next) => {
  if (typeof req.headers.authorization !== "undefined") {
    let token = req.headers.authorization.split(" ")[1];
    var privateKey = config.session.token;
    jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, payload) => {
      if (err) {
        console.log("TOKEN EXPIRED");
        const username = req.body.username;
        userService.createToken(username, (token) => {
          res.setHeader("Authorization","jwt-token "+ token);
        });
        return next();
      }
      else {
      const nowUnixSeconds = Math.round(Number(new Date()) / 1000);
      console.log(payload.exp - nowUnixSeconds)
        if (payload.exp - nowUnixSeconds > 30) {
          userService.createToken(payload.user, (token) => {
            res.setHeader("Authorization","jwt-token "+ token);
          });
        }
        next();
      }
    });
  } else {
    res.status(500).json({ error: "Not Authorized, No Header" });
    return;
  }
};

module.exports = authHandler;
