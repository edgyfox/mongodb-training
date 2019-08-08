const assert = require('assert');
const GOTChar = require('../models/gotchar');

describe('Finding tests for GOTChar model', function() {

    var someChar;

    // create record to find
    beforeEach(function(done) {
        someChar = new GOTChar({
            name: "Jamie",
            house: "Lannister",
            peopleKilled: 363
        });

        someChar.save().then(function() {
            done();
        });
    });

    // finding data by name from db
    it('Find data to model', function(done) {
        GOTChar.findOne({
            name: 'Jamie'
        }).then(function(result) {
            assert(result.name === 'Jamie');
            done();
        });
    });

    // finding record by ID
    it('Find data by ID', function(done) {
        GOTChar.findOne({
            _id: someChar._id
        }).then(function(result) {
            assert(result._id.toString() === someChar._id.toString());
            done();
        });
    });
});
