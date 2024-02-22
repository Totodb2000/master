
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  visibility: {
    type: String,
    enum: ['public', 'private']},
  title: String,
  author: String,
  year: Number,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book