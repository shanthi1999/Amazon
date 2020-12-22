const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const blog = require('./bookschema')
const addbook = require('./addtocartschema');
const user = require('./user');
const bodyparser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const LocalStrategy = require('passport-local').Strategy;

// {require('./passport')(passport);

const port = process.env.port || 5000;

mongoose.connect('mongodb://localhost:27017/abooks', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log("conncetion opened")
})


app.use(express.urlencoded({ extended: true }))
app.use(cors())
// {app.use(require("body-parser").json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(user.authenticate()))
passport.serializeUser(user.serializeUser())
passport.deserializeUser(user.deserializeUser())
//home page
app.get('/', async (req, res) => {
    var shows = await blog.find({ User_Rating: 4.9 }).limit(50)
    console.log(shows)
    res.json(shows)
})
//displaying books details
app.get('/singlebook', async (req, res) => {
    var sbook = req.query.id
    const result = Object.keys(sbook)
    const mybook = await blog.findById({ _id: result[0] })
    console.log(mybook)
    res.json(mybook)
})
//finding non-fiction books
app.get('/ficiton', async (req, res) => {
    var show = await blog.find({ Genre: "Fiction" }).limit(50)
    console.log(show.length)
    res.json(show)
})
//finding nonfiction books
app.get('/nonficiton', async (req, res) => {
    var nonbook = await blog.find({ Genre: "Non Fiction" }).limit(50)
    console.log(nonbook.length)
    res.json(nonbook)
})

//book added to cart
app.post('/add', async (req, res) => {
    var incoming = req.body;
    console.log(incoming)
    var std = new addbook(req.body);
    std.save(function (err, result) {
        console.log(result)
        res.send(result)
    })
})

app.get('/add', async (req, res) => {
    var addtobook = await addbook.find()
    res.json(addtobook)
})

app.post('/add/delete', async (req, res) => {
    var bookids = req.body;
    console.log(bookids)
    var delbooks = Object.keys(bookids)
    console.log(delbooks[0])

    await addbook.findOneAndRemove({ _id: delbooks })
    const rembook = await addbook.find()
    res.json(rembook)
})

app.post('/register', async (req, res) => {

    const { name, email, password } = await req.body;
    console.log(name, email, password)
    //{finding user in the database
    user.findOne({ email: email })
        .then(User => {
            if (User) {
                //{user exist
                res.redirect('/register')
            }
            else {
                const newUser = new user({
                    name,
                    email,
                    password
                });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(User => {
                                res.redirect('/login');
                            })
                            .catch(err => console.log(err))

                    })
                })
                res.send(newUser)
            }

        })
})

app.post('/logins', async (req, res) => {
    const email = await req.body.email;
    const password = await req.body.password;
    // {const loginone = await user.findOne({ email: email })
    await user.findOne({ email: email })
        .then(User => {
            if (User) {
                bcrypt.compare(password, User.password, (err, isMatch) => {
                    if (err) throw err;

                    if (isMatch) {
                        var token = jwt.sign({ id: User._id }, 'secret');
                        console.log(token)
                        console.log("you are logged in")
                        res.json({ token: token, User: User, condition: true });

                    }
                    else {
                        console.log("Incorrect password")
                        res.json('Incorrect password')
                    }
                })
            }
            else {
                console.log("email not registered")
                res.send("email is not registered")
            }
        })
        .catch((err) => {
            res.send(err)
        })
})

app.post('/singlebook', async (req, res) => {
    var userid = req.body.userId
    var username = req.body.UserName
    var textarea = req.body.TextArea
    var bookid = req.body.ids;
    await blog.findByIdAndUpdate({ _id: bookid }, { $push: { "comment": { UserId: userid, Username: username, text: textarea } } }, { safe: true, upsert: true, new: true })
    var mybook = await blog.findById({ _id: bookid })
    res.json(mybook)
}
)
app.post('/onebook', async (req, res) => {
    var sbook = req.body.id
    console.log(sbook)
    // const result = Object.values(sbook)
    const mybook = await blog.findById({ _id: sbook })
    console.log(mybook)
    res.json(mybook)
})

app.post('/single', async (req,res)=>{
    var booksid = req.query;
    var oneBookComment = Object.values(booksid)
    console.log(oneBookComment[0])
    var onecomment = await blog.find({ _id: oneBookComment[0] })
    console.log(onecomment[0])
    res.json(onecomment[0])
})

app.listen(port, () => { console.log("server started...") })
