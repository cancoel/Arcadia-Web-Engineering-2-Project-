var express = require("express");
var router = express.Router();
const User = require("../models/users.js");

/* GET users listing. */
router.get("/", function (req, res) {
  User.find()
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      console.error(error);
    });
});

router.get("/user", function (req, res) {
  // console.log(req.body)
  User.find({
    username: req.body.username,
  })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      console.error(error);
    });
});

router.post("/register", (request, response) => {
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
        const newUser = new User({
          username: request.body.username,
          email: request.body.email,
          password: request.body.password,
          bio: request.body.bio,
          image: request.body.image,
          userType: request.body.userType,
        });
        newUser
          .save()
          .then((user) => {
            response.status(201).json(user);
          })
          .catch((error) => {
            response.status(500).json(error);
          });
      }
    });
});

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
            if (user.password === request.body.password) {
              response.status(200).json(user);
            }
          }
        });
        response.status(400).json({
          error: "Password incorrect",
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

router.delete("/remove", (request, response) => {
  User.find()
    .or([{ email: request.body.email }, { username: request.body.username }])
    .then((users) => {
      if (users.length) {
        // suche erfolgreich
        users.forEach((user) => {
          if (user.password === request.body.password) {
            User.deleteOne()
              .or([
                { username: request.body.username },
                { email: request.body.email },
              ])
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
    });
});

router.patch("/edit", (request, response) => {
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
  User.findOneAndUpdate(
    {
      username: request.body.username
    },
    request.body,
    {
      upsert: false,
      new: true,
    }
  ).then((user) => {
    if (!user) {
      response.status(400).json({
        error: 'Username not found'
      });
    }
    response.status(200).json(user);
  });
});

module.exports = router;