var mongoose = require('mongoose');
var localMongoose = require('passport-local-mongoose');

var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        message: 'name is required'
    },
    email: {
        type: String,
        required: true,
        message: 'name is required'
    },
    password: {
        type: String,
        required: true,
        message: 'name is required'
    },
    date: {
        type: String,
        default: 'yytyyt'
    }
});

userSchema.plugin(localMongoose);
var user = mongoose.model('user', userSchema, 'log');

module.exports = user;