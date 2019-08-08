const assert = require('assert');
const GOTChar = require('../models/gotchar');

describe('Saving tests for GOTChar model', function() {

    // saving data to model
    it('Save data to model', function(done) {

        var someChar = new GOTChar({
            name: "Jamie",
            house: "Lannister",
            peopleKilled: 363
        });

        someChar.save().then(function() {
            assert(someChar.isNew === false);
            done();
        });
    });

});
