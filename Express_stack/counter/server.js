const express = require("express");
const app = express();
const session = require('express-session');
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.post('/count2', (req, res) => {
    req.session.count+=1;
    console.log(req.session.count) 
    res.redirect('/')
});

app.get('/', (req, res) => {
    if (!req.session.count){
        req.session.count = 0;
    }
    req.session.count++
    var count = req.session.count;
    context = {
        count:count
    }
    res.render('index', context);
    });
app.post('/', (req, res) => {
    req.session.count = req.body.count;
    res.redirect('/');
});
    
app.get('/reset', (req,res)=>{
    req.session.destroy();
    res.redirect('/')
})


app.listen(8000, () => console.log("listening on port 8000"));