const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creeate schema and model for GOT characters
const GOTCharSchema = new Schema(
    {
        name: String,
        house: String,
        peopleKilled: Number
    }
);

const GOTChar = mongoose.model('gotchar', GOTCharSchema);

module.exports = GOTChar;
