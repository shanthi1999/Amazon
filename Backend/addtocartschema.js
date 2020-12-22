var mongoose = require('mongoose');

var bloSchema = new mongoose.Schema({
    // Useremail:String,
    
    Name: String,
    Author: String,
    User_Rating: Number,
    Reviews: Number,
    Price: Number,
    Year: Number,
    Genre: String,
    comment: [{
        UserId:String,
        Username: String,
        text: String
    }],
    Image: String,
});

var addbook = mongoose.model('addbook', bloSchema, 'addbooks');

module.exports = addbook;

