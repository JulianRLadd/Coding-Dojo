const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('form');
});
app.post('/newform', (req,res)=>{
    console.log(req.body)
    var name = req.body.name
    var location = req.body.location
    var language = req.body.language
    var comment = req.body.comment
    context={
        name:name,
        location:location,
        language:language,
        comment:comment,
    }
    res.render('result',context)
});



app.listen(8000, () => console.log("listening on port 8000"));
