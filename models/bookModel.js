const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  _id: String,
  title: String,
  author: String,
});

module.exports = mongoose.model('Book', bookSchema);
