		const mongoose  = require ('../config/mongoose.js')
		const Author = require('../models/author.js')

		module.exports  = {
    			index: function(req, res) {
    				Author.find()
	                    .then(data => res.json(data))
	                    .catch(err => res.json(err));
    			},
    			create: function(req, res) {
        			var cake = new Author(req.body);
        			cake.save()
                        .then(data =>res.json(data))
                        .catch(err => res.json(err));
    				},
    			find: function(req,res){
                        Author.findOne({_id:req.params.id})
                             .then(data => res.json(data))
                             .catch(err => res.json(err));
    					},
                update: function(req,res){
                    Author.findOne({_id:req.params.id})
                    .then(author =>{
                        console.log('******CONTROLLERS*******',req.body)
                        author.name= req.body.name;
                        return author.save();
                    })
                            .then(data =>res.json(data))
                            .catch(err => res.json(err));
                        },
                delete: function(req,res){
                    Author.deleteOne({_id:req.params.id})
                            .then(data =>res.json(data))
                            .catch(err => res.json(err));
                        }
				};
