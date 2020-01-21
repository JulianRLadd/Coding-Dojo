const express = require("express");
	const app = express();

    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/name_of_your_DB', {useNewUrlParser: true});
    
    app.use(express.json());

    const NameSchema = new mongoose.Schema({
        name: String,
        },{timestamps:true})
       // create an object that contains methods for mongoose to interface with MongoDB
    const Name = mongoose.model('Name', NameSchema);

    app.get('/', (req, res) => {  
            Name.find()
                .then(data => res.json(data))
                .catch(err => res.json(err));
        });


        app.get('/new/:name', (req, res) => {
            const name = new Name(req.params);
            console.log(name);
            name.save()
            .then(data =>res.json(data))
            .catch(err => res.json(err));
    });
    
        app.get('/remove/:name', (req, res) => {  
            name = Name.deleteOne({name:req.params.name})
                .then(data => res.json(data))
                .catch(err => res.json(err));
            });
            
    app.get('/:name', (req, res) => {  
        data = Name.findOne({name:req.params.name})
        .then(data => {
            console.log(data)
            res.json({name: data})
        })
        .catch(err => res.json(err));
        });


    app.listen(8000, () => console.log("listening on port 8000"));
