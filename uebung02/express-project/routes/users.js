"use strict";

var express = require("express");
var router = express.Router();
const User = require("../models/users.js");
const userService = require("../services/userService");
var bcrypt = require("../services/bcrypt");
const authHandler = require("../services/authHandler");
const { set } = require("../app.js");
const { isAuthenticated } = require("../services/authHandler");

// Route to get all users
router.get("/", isAuthenticated, function (request, response) {
  //router.use(authHandler);
  User.find()
    .then((user) => {
      response.json(user);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Route to get an user by id
router.get("/:id", isAuthenticated, function (request, response) {
  User.findOne({
    _id: request.params.id,
  })
    .then((user) => {
      if (user) {
        var JSONblock = {
          username: user.username,
          userTypeAdmin: user.userTypeAdmin,
        };
        response.status(200).json(JSONblock);
        console.log(user);
      } else {
        response.status(404).json({
          error: "User not found",
        });
      }
    })
    .catch((error) => {
      response.status(500).json(error);
    });
});

// Route to register a new user
router.post("/register", (request, response) => {
  router.use(authHandler);
  User.find()
    .or([{ email: request.body.email }, { username: request.body.username }])
    .then((users) => {
      if (users.length) {
        // suche erfolgreich
        let username, email;

        users.forEach((user) => {
          console.log(user);
          if (user.username === request.body.username) {
            username = `${request.body.username} is already taken`;
          }
          if (user.email === request.body.email) {
            email = `${request.body.email} is already taken`;
          }
        });

        return response.status(400).json({
          username: username,
          email: email,
        });
      } else {
        // noch nicht in db -> neu anlegen

        // passwort wird gehashed und ein neuer user angelegt
        bcrypt.encrypt(request.body.password, (hash) => {
          const newUser = new User({
            username: request.body.username,
            email: request.body.email,
            password: hash,
            bio: request.body.bio,
            image: request.body.image,
            userTypeAdmin: request.body.userTypeAdmin,
          });
          newUser
            .save()
            .then((user) => {
              response.status(201).json(user);
            })
            .catch((error) => {
              response.status(500).json(error);
            });
        });
      }
    });
});

// Route to user login
router.post("/login", (request, response) => {
  User.find()
    .or([{ email: request.body.email }, { username: request.body.username }])
    .then((users) => {
      if (users.length) {
        // suche erfolgreich
        users.forEach((user) => {
          if (
            user.username === request.body.username ||
            user.email === request.body.email
          ) {
            // wenn user gefunden wurde, wird das angegebene passwort im body mit dem
            // gehashten psswort in der DB abgegelichen
            bcrypt.decrypt(request.body.password, user.password, (isMatch) => {
              if (isMatch) {
                userService.createToken(user, (token) => {
                  response.setHeader("jwt-token", token);
                  response.status(200).json(user);
                });
              } else {
                response.status(400).json({
                  error: "Password incorrect",
                });
              }
            });
          }
        });
      } else {
        if (request.body.username) {
          response.status(400).json({
            error: "Username not found",
          });
        }
        if (request.body.email) {
          response.status(400).json({
            error: "Email not found",
          });
        }
      }
    });
});

// Route to delete an user
router.delete("/remove/:id", (request, response) => {
  User.find({
    _id: request.params.id,
  })
    .then((users) => {
      if (users.length) {
        // suche erfolgreich
        users.forEach((user) => {
          if (user.password === request.body.password) {
            User.deleteOne({
              _id: request.params.id,
            })
              .then((user) => {
                response.status(200).json(user);
              })
              .catch((error) => {
                response.status(500).json(error);
              });
          } else {
            response.status(403).json({
              error: "Password incorrect!",
            });
          }
        });
      } else {
        if (request.body.username) {
          response.status(400).json({
            error: "Username not found",
          });
        }
        if (request.body.email) {
          response.status(400).json({
            error: "Email not found",
          });
        }
      }
    })
    .catch((error) => {
      response.status(500).json({
        error: "kaputt du lauch",
      });
    });
});

// Route to edit an user
router.patch("/edit/:id", (request, response) => {
  // NOT NEEDED IF UPDATE === request.body
  // only update the passed request properties
  // add prop to update if !== undefined
  // empty props will not be nullified
  // let update = {};
  // for(let key in request.body) {
  //   if(request.body[key]) {
  //     update[key] = request.body[key];
  //   }
  // }

  // Suchen und ändern über Username. Wird nicht mehr benutzt, wird nun über die id
  // realisiert

  //   User.findOneAndUpdate(
  //     {
  //       username: request.body.username
  //     },
  //     request.body,
  //     {
  //       upsert: false,
  //       new: true,
  //     }
  //   ).then((user) => {
  //     if (!user) {
  //       response.status(400).json({
  //         error: 'Username not found'
  //       });
  //     }
  //     response.status(200).json(user);
  //   });
  // });

  User.findByIdAndUpdate(
    {
      _id: request.params.id,
    },
    request.body,
    {
      upsert: false,
      new: true,
    }
  ).then((user) => {
    if (!user) {
      response.status(400).json({
        error: "Username not found",
      });
    }
    response.status(200).json(user);
  });
});

module.exports = router;
