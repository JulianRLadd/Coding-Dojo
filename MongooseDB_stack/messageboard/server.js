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

mongoose.connect('mongodb://localhost/serpentDB', {useNewUrlParser: true});
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const commentSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Comments must have a user"]},
    content: {type: String, required: [true, "Comments must have content"]},
}, {timestamps: true})
const messageSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Messages must have a user"]},
    content:{type: String, required: [true, "Messages must have content"]},
    comments: [commentSchema]
}, {timestamps: true})
const Message = mongoose.model('Message', messageSchema);
const Comment = mongoose.model('Comment', commentSchema);


app.get('/',(req,res) => {
    Message.find()
    .then(mdata =>{
        console.log(mdata)
            res.render("index",{messages:mdata})
        })
})
    

app.post('/messages', (req, res) => {
    var message = new Message(req.body);
    message.save()
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
app.post('/comments/:id', (req, res) => {
    var comment = new Comment(req.body);
    comment.save()
        .then(comment => {
            Message.findOneAndUpdate({_id:req.params.id},{$push: {comments:comment}})
            .then(() => {
                res.redirect('/')})
            })
            .catch(err => {
                console.log("we have an error!",err)
                res.redirect('/')
            })
            
        .catch(err => {
            console.log("We have an error!", err);
            for (var key in err.errors) {
                console.log("err",err.errors[key].message)
                req.flash ('registration', err.errors[key].message);
        }
        res.redirect('/');
    });
});


app.listen(8000, () => console.log("listening on port 8000"));