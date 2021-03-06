"use strict";

const mongoose = require("mongoose");
const config = require("config");
const User = require("./models/users");


mongoose.connect(config.db.connectionString, config.db.connectionOptions);



var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {

  // we're connected!
  console.log("Connected");
});

