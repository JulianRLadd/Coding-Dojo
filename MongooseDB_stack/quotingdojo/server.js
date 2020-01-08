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

const QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    quote: {type: String, requited: true, minlength: 6}
},{timestamps: true});
   // create an object that contains methods for mongoose to interface with MongoDB
const Quote = mongoose.model('Quote', QuoteSchema);
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost/quotingdojo', {useNewUrlParser: true});
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
    res.render("index");
});

app.post('/quotes', (req, res) => {
    var quote = new Quote(req.body);
    quote.save()
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

app.get('/quotes', (req, res) => {  
    Quote.find()
        .then(data => 
            {console.log(data),
            res.render("quotes", {quote: data})
        }
        )
        .catch(err => res.json(err));
    });

app.listen(8000, () => console.log("listening on port 8000"));