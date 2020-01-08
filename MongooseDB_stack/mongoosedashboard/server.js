const express = require('express');
const mongoose = require('mongoose');
const flash = require('express-flash');
const session  = require('express-session');
const app = express();
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(flash());

const serpentSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    length: {type: Number, required: true, minlength: 1},
    type: {type: String, required: true, minlength: 5}
},{timestamps: true});

const Serpent = mongoose.model('Serpent', serpentSchema);
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost/serpentDB', {useNewUrlParser: true});
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/',(req,res) => {
    Serpent.find()
    .then(data => 
        {console.log(data),
        res.render("index", {serpent: data})
    })
    .catch(err => res.json(err));
});

app.get('/serpents/new', (req,res)=> {  
    res.render("form")
})

app.get('/serpents/:id', (req,res)=> {
    console.log(req.params)
    data = Serpent.findOne({_id:req.params.id})
    .then(data => {
        console.log(data)
        res.render("info",{serpent: data})
    })
    .catch(err => res.json(err));
})

app.get('/serpents/edit/:id', (req,res)=> {
    Serpent.findOne({_id:req.params.id})
    .then(data => {
        console.log(data)
        res.render("edit",{serpent: data})
    })
    .catch(err => res.json(err));
})

app.post('/serpents/edit/:id', (req,res)=>{
    serpent = Serpent.findOne({_id:req.params.id})
        .then(serpent => {
            serpent.name= req.body.name;
            serpent.length=req.body.length;
            serpent.type=req.body.type;
            return serpent.save();
        })
        .then(() => {res.redirect('/')})
        .catch(err => {
            console.log("We have an error!", err);
            for (var key in err.errors) {
                console.log("err",err.errors[key].message);
                req.flash ('registration', err.errors[key].message);
            }
    });
})
app.post('/serpents/destroy/:_id', (req,res)=>{
    console.log(req.params._id)
    serpent = Serpent.deleteOne({id:req.params.id})
        .then(() => {res.redirect('/')})
        .catch(err => {
            console.log("We have an error!", err);
            for (var key in err.errors) {
                console.log("err",err.errors[key].message);
                req.flash ('registration', err.errors[key].message);
            }
    });
})

app.post('/serpents', (req, res) => {
    var serpent = new Serpent(req.body);
    serpent.save()
        .then(() => res.redirect('/'))
        .catch(err => {
            console.log("We have an error!", err);
        for (var key in err.errors) {
            console.log("err",err.errors[key].message)
            req.flash ('registration', err.errors[key].message);
        }
        res.redirect('/');
    });
});

app.listen(8000,() => console.log("listening on port 8000"));