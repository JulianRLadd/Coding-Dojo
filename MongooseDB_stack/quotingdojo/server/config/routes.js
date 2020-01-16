const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = function (app){

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
        
    }