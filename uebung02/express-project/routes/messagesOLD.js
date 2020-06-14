"use strict";

var express = require("express");
var User = require("../models/users.js");
var router = express.Router();
const message = require("../models/messages");




router.post("/:recipient", (request, response) => {
  console.log(request.params.recipient);


  User.find({
    username: [request.body.sender, request.params.recipient],
    
//   }, {
//       message: request.body.message
//   }, {
//     upsert: false,
//     new: true,
  })

    .then((users) => {
        users.forEach((user) => {
             user.updateMany({
                 message: request.body.message.push
             })

        })
      response.status(200).json(users);
    })
    .catch((error) => {
      response.status(500).json(error);
    });
});

module.exports = router;
