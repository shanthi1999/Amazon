var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
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

var Blog = mongoose.model('Blog', blogSchema, 'tbooks');

module.exports = Blog;

