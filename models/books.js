const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleBooks = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  description: String,
  image: String,
  link: String,
});

const Books = mongoose.model("Book", googleBooks);

module.exports = Books;
