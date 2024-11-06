const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/learning-website");

const subjectSchema = new mongoose.Schema({
  name: String,
  semesterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Semester",
  },
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Note",
    },
  ],
});
module.exports = mongoose.model("Subject", subjectSchema);
