const express = require('express');
const app = express();
const mongoose = require('mongoose');
const flash = require('express-flash');
const session  = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(flash());

const Quote = require('./server/models/quote.js')(mongoose)

app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost/quotingdojo', {useNewUrlParser: true});
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


require ('./server/config/routes.js')(app)

app.listen(8000, () => console.log("listening on port 8000"));