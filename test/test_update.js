const assert = require('assert');
const GOTChar = require('../models/gotchar');

describe('Updating tests for GOTChar model', function() {

    var someChar;

    // create data for updation
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

    // updating data to model
    it('Update data to model', function(done) {

        GOTChar.findOneAndUpdate({
            name: 'Jamie'
        }, {
            name: 'Cersei'
        }).then(function(){
            GOTChar.findOne({
                _id: someChar._id
            }).then(function(result) {
                assert(result.name === 'Cersei');
                done();
            });
        });
    });

    // increment peopleKilled by 1
    it('Update peopleKilled', function(done) {

        GOTChar.update({}, { $inc: { peopleKilled: 1}}).then(function() {
            GOTChar.findOne({
                name: 'Jamie'
            }).then(function(result) {
                assert(result.peopleKilled === 364);
                done();
            })
        });
    });

});
