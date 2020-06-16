"use strict";

var express = require("express");
var router = express.Router();
const Thread = require("../models/thread");
const Reply = require("../models/reply");
const User = require("../models/users");

router.get('/reply/:id', (request, response) => {
  Reply.find({
    _id: request.params.id
  })
  .then((replies) => {
    if(replies.length) {
      response.status(200).json(replies[0]);
    }
    response.status(404).json({
      error: 'Reply not found'
    })
  })
  .catch((error) => {
    response.status(500).json(error);
  })
});

router.post("/:id/reply", (request, response) => {
  Thread.find({
    _id: request.params.id,
  })
    .then((threads) => {    
      User.find({
        _id: request.body.author
      })
        .then((users) => {
          let reply = new Reply({
            content: request.body.content,
            author: request.body.author,
          });
          reply.save()
            .catch((error) => {
              response.status(500).json(error);
            });
          threads[0].replies.push(reply);
          threads[0].save()
            .catch((error) => {
              response.status(500).json(error);
            });
          users[0].replies.push(reply);
          users[0].save()
          .then((_) => {
            response.status(200).json(reply);
          })
          .catch((error) => {
            response.status(500).json(error);
          });
        })
        .catch((error) => {
          console.log(error);
          
          response.status(404).json({
            error: "User not found",
          });
        });
    })
    .catch((error) => {      
      response.status(404).json({
        error: "Thread not found",
      });
    });
});

module.exports = router;
