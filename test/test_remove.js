const assert = require('assert');
const GOTChar = require('../models/gotchar');

describe('Removing tests for GOTChar model', function() {

    var someChar;

    // add data to remove
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

    // remove data to model
    it('Remove data to model', function(done) {

        GOTChar.findOneAndRemove({
            name: 'Jamie'
        }).then(function() {
            GOTChar.findOne({
                name: 'Jamie'
            }).then(function(result) {
                assert(result === null);
                done();
            });
        });
    });

});
