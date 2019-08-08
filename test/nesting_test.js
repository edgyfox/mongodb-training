const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

describe('Testing nesting of records', function() {

    it('Creates an author with sub documents', function(done) {
         var mike = new Author({
             name: 'Michael Crichton',
             age: 45,
             books: [
                 {
                     title: 'Jurassic Park',
                     noOfPages: 297
                 }
             ]
         });

         mike.save().then(function() {
            Author.findOne({
                name: 'Michael Crichton'
            }).then(function(result) {
                assert(result.books.length === 1);
                done();
            });
         });
    });

    it('add book to existing author', function(done) {
        var mike = new Author({
            name: 'Michael Crichton',
            age: 45,
            books: [
                {
                    title: 'Jurassic Park',
                    noOfPages: 297
                }
            ]
        });

        mike.save().then(function() {
            Author.findOne({
                name: 'Michael Crichton'
            }).then(function(record) {
                record.books.push({
                    title: 'The Lost World',
                    noOfPages: 316
                });
                record.save().then(function() {
                    Author.findOne({
                        name: 'Michael Crichton'
                    }).then(function(record) {
                        assert(record.books.length === 2);
                        done();
                    });
                });
            });
        });
    });
});
