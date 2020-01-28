console.log("**********SERVER***********")
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mongoose  = require ('./server/config/mongoose.js')
const flash = require('express-flash');
const session  = require('express-session');
app.use(express.static( __dirname + '/public/dist/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
const Cake = require('./server/models/cake.js')(mongoose)
require ('./server/config/routes.js')(app)

app.listen(8000, () => console.log("listening on port 8000"));