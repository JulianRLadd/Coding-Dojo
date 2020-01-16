const express = require('express')
const mongoose = require('mongoose');
const flash = require('express-flash');
const session  = require('express-session');
const app = express();
app.use(flash());
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost/loginDB', {useNewUrlParser: true});
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const userSchema = new mongoose.Schema({
    email: {type: String, required: [true, "Users must have an email"]},
    first_name: {type: String, required: [true, "Users must have a first name"]},
    last_name: {type: String, required: [true, "Users must have a last name"]},
    password: {type: String, required: [true, "Users must have a password"]},
    birthdate: {type: Date, required: [true, "Users must have a birthdate"]},
}, {timestamps: true})

const user = mongoose.model('User', userSchema);

app.get('/',(req,res) => {
    Message.find()
    .then(mdata =>{
        console.log(mdata)
            res.render("index")
        })
})

app.post('/registration',(req,res) => {
    if(req.body.password!== req.body.confirmpw){
        
    }
    var user = new userSchema(req.body);
    user.save()
})

app.post('/login',(req,res) => {
    var user = new userSchema(req.body);
    user.save()
})