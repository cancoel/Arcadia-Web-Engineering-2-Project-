const mongoose = require("mongoose");
const config = require("config");
mongoose.connect(config.db.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Cat = mongoose.model("Cat", { name: String });
const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));
console.log("hallo welt");
module.exports = mongoose;