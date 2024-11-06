const mongoose = require("mongoose");

// Define schema for uploaded notes
const noteSchema = new mongoose.Schema({
  title: String, // Field for the title of the PDF
  filename: String,
  uploadDate: { type: Date, default: Date.now },
  filePath: String,
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
});

// Create and export Note model
module.exports = mongoose.model("Note", noteSchema);
