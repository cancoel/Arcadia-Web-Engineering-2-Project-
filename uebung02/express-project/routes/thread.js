"use strict";

var express = require("express");
var router = express.Router();
var Thread = require("../models/thread.js");
var User = require("../models/users");

// Route to post a new thread
router.post("/", (request, response) => {
  User.find({
    _id: request.body.author,
  })
  .then((users) => {
    console.log(request.body);
      // if users.legth
      console.log(users);
      let thread = new Thread({
        title: request.body.title,
        author: request.body.author,
        content: request.body.content,
      });

      thread
        .save()
        .then((thread) => {
          response.status(200).json(thread);
        })
        .catch((error) => {
          response.status(500).json(error);
        });

      users[0].threads.push(thread);
      users[0].save().catch((error) => {
        response.status(500).json(error);
      });
    })
    .catch((_) => {
      response.status(404).json({
        error: "User not found",
      });
    });
});

// Route to get all threads
router.get("/", (request, response) => {
  Thread.find()
    .then((thread) => {
      response.status(200).json(thread);
    })
    .catch((error) => {
      response.status(500).json(error);
    });
});

// Route to get thread by id
router.get("/:id", (request, response) => {
  Thread.find({
    _id: request.params.id,
  })
    .then((thread) => {
      response.status(200).json(thread);
    })
    .catch((error) => {
      response.status(500).json(error);
    });
});

// Route to delete thread by id
router.delete("/remove/:id", (request, response) => {
  Thread.findOneAndDelete({
    _id: request.params.id,
  })
    .then((thread) => {
      response.status(200).json(thread);
    })
    .catch((_) => {
      response.status(404).json({
        error: "Thread not found",
      });
    });
});

router.patch("/edit/:id", (request, response) => {
  Thread.findByIdAndUpdate(
    {
      _id: request.params.id,
    },
    request.body,
    {
      new: true,
    }
  ).then((thread) => {
    if (!thread) {
      response.status(400).json({
        error: "Thread not found",
      });
    }
    response.status(200).json(thread);
  });
});

module.exports = router;
