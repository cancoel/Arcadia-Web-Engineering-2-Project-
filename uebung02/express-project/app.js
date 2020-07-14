"use strict";

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var process = require("process");
var db = require("./dbcon");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var messagesRouter = require("./routes/messages");
var threadRouter = require("./routes/thread");
var replyRouter = require("./routes/reply");


var app = express();

// // create application/json parser
var jsonParser = bodyParser.json();

// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false });;
// // parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/*+json" }));

// // parse some custom thing into a Buffer
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// // parse an HTML body into a string
// app.use(bodyParser.text({ type: 'text/html'}));

// // POST /login gets urlencoded bodies
// app.post('/api/message/:recipient', urlencodedParser, function (req, res) {
//   console.log(req.body)
//   res.send('erfolgreich gespeichert');
// })

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const cors = require('cors');
app.use(cors());

app.use("/api", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/message", messagesRouter);
app.use("/api/threads", threadRouter);
app.use("/api/threads", replyRouter);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// const port = process.env.PORT || 443;
// app.listen(port, () => {
//   console.log("Server running on port", port);
// });

module.exports = app;
