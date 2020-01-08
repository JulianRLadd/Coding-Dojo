const express = require("express");
const mongoose = require('mongoose');
const app = express();
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/first_mongoose',{useNewUrlParser:true});
const UserSchema = new mongoose.Schema({
    name:String,
    age:Number,
})
const User = mongoose.model('User', UserSchema);
app.use(express.static(__dirname+ "/static"));
app.set('view engine', 'ejs')
app.set('views',__dirname +'/views');

app.post('/users', (req,res) => {
    var user = new User( );
    console.log(user)
    user.name = req.body.name;
    user.age = req.body.age;
    user.save()
        .then(newUserData => console.log('user created: ',newUserData))
        .catch(err => console.log(err));
    res.redirect('/');
})

app.get('/', (req,res)=>{
    User.find()
        .then(data => res.render("index",{users: data}))
        .catch(err => res.json(err));
})
app.listen(8000, () =>console.log("listening on port 8000"));