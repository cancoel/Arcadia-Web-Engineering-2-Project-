const mongoose = require("mongoose");
const config = require("config");
const User = require("./models/users");
mongoose.connect(config.db.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const Cat = mongoose.model("Cat", { name: String });
// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));
// console.log("hallo welt");
//  module.exports = mongoose;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("Conntected");
});

// const test = new User({
//   username: "Anton",
//   email: "hello@ich.de",
// });
// test
//   .save()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
