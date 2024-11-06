const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/learning-website");

const semesterSchema = new mongoose.Schema({
  name: String,
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
    },
  ],
});

module.exports = mongoose.model("Semester", semesterSchema);
