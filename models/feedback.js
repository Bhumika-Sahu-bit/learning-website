const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/learning-website");

const feedback = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("feedback-database", feedback);
