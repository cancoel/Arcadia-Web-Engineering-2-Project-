"use strict";

var authHandler = require("express").Router();
var userService = require("./userService");
const { token } = require("morgan");
var jwt = require("jsonwebtoken");
var config = require("../config/default.json");
const { request } = require("../app");

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
  console.log(typeof req.headers.authorization);
  if (typeof req.headers.authorization !== "undefined") {
    let token = req.headers.authorization.split(" ")[1];
    var privateKey = config.session.token;
    jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, payload) => {
      if (err) {
        res.status(500).json({ error: "Not Authorized" });
        return;
      }
      return next();
    });
  } else {
    res.status(500).json({ error: "Not Authorized" });
    return;
  }

  var payload;
  try {
    payload = jwt.verify(token, jwtKey);
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      return res.status(401).end();
    }
    return res.status(400).end();
  }
  const nowUnixSeconds = Math.round(Number(new Date()) / 1000);
  if (payload.exp - nowUnixSeconds > 30) {
    return res.status(400).end();
  }
  const newToken = jwt.sign({ username: payload.username }, jwtKey, {
    algorithm: "HS256",
    expiresIn: jwtExpirySeconds,
  });
};

module.exports = authHandler;
