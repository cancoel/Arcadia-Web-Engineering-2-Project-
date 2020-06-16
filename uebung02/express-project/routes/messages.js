"use strict";

var express = require("express");
var User = require("../models/users.js");
var UserMessage = require("../models/messages.js");
var router = express.Router();
var message = require("../models/messages.js");

// Route to get all messages
router.get("/", (request, response) => {
  UserMessage.find()
    .then((message) => {
      response.status(200).json(message);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Route to get messages by user id
router.get("/:id", function (request, response) {
  UserMessage.find()
    .or([{ sender: request.params.id }, { recipient: request.params.id }])
    .then((messages) => {
      let outbox = [];
      let inbox = [];
      messages.forEach((message) => {
        if (message.sender == request.params.id) {
          outbox.push(message);
        } else if (message.recipient == request.params.id) {
          inbox.push(message);
        }
      });
      response.status(200).json({
        outbox: outbox,
        inbox: inbox,
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

// Route to send a message between two users
router.post("/:recipient", (request, response) => {
  console.log(
    "user1",
    request.params.recipient,
    "-> user2",
    request.body.sender,
    ":",
    request.body.message
  );

  User.find({
    _id: [request.body.sender, request.params.recipient],
  })
    .then((users) => {
      let message = new UserMessage({
        sender: request.body.sender,
        recipient: request.params.recipient,
        content: request.body.message,
      });
      users.forEach((user) => {
        user.messages.push(message);
        user.save().catch((error) => {
          response.status(500).json(error);
        });
      });
      message
        .save()
        .then((message) => {
          response.status(200).json(message);
        })
        .catch((error) => {
          response.status(500).json(error);
        });
    })
    .catch((error) => {
      response.status(500).json(error);
    });
});


router.delete('/remove/:id', (request, response) => {
  UserMessage.findOneAndDelete({
      _id: request.params.id
  })
  .then((message) => {
      response.status(200).json(message);
  })
  .catch((_) => {
      response.status(404).json({
          error: 'Message not found'
      });
  });
})

module.exports = router;
