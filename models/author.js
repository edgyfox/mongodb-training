const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema for books
const BookSchema = new Schema({
    title: String,
    noOfPages: Number
})

// create schema and model for Authors
const AuthorSchema = new Schema(
    {
        name: String,
        age: Number,
        books: [BookSchema]
    }
);

const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;
