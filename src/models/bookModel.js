const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: String,
    authorName: String,
    category: { type: String, enum: ["drama", "horror", "comedy","fantasy"] },
    year: Number,
    message:String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
