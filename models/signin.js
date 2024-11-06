const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/learning-website");

const signin = mongoose.Schema({
  fullname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("login-database", signin);
