// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const user = require('./user');

// module.exports = function (passport) {
//     passport.use(
//         new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
//             user.findOne({ email: email })
//                 .then(User => {
//                     if (!User) {
//                         return done(null, false, { message: "That email is not registered" });
//                     }
//                     //match password
//                     bcrypt.compare(password, User.password, (err, isMatch) => {
//                         if (err) throw err;

//                         if (isMatch) {
//                             return done(null, User)
//                         } else {
//                             return done(null, false, { mesage: "Password incorrecti" })
//                         }

//                     })
//                 })
//                 .catch(err => console.log(err));
//         })
//     );

//     passport.serilazeUser(function (User, done) {
//         done(null, User.id);
//     })
//     passport.deserializeUser(function (id, done) {
//         user.findById(id, function (err, User) {
//             done(err, User);
//         })
//     })
// }