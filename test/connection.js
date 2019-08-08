const mongoose = require('mongoose');
//ES6 Promises instead to mongoose's
mongoose.Promise = global.Promise;

// fixing deprecations
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true)

// connect to DB before tests
before(function(done) {
    // connect to mongodb
    mongoose.connect('mongodb://localhost/testdb');

    mongoose.connection.once('open', function() {
        console.log('Connection created!');
        done();
    }).on('error', function(error) {
        console.log('Connection error: ', error);
    });
});

// Drop collection before each test
beforeEach(function(done) {
    mongoose.connection.collections.gotchars.drop(function(){
        mongoose.connection.collections.authors.drop(function(){
            done();
        });
    });
});

after(function() {
    mongoose.connection.close().then(function() {
        console.log('Connection closed!');
    });
})
