const mongoose  = require ('../config/mongoose.js')
const Cake = require('../models/cake.js')

		module.exports  = {
    			index: function(req, res) {
    				Cake.find()
	                    .then(data => res.json({cakes: data}))
	                    .catch(err => res.json(err));
    			},
    			create: function(req, res) {
        			var cake = new Cake(req.body);
        			cake.save()
                        .then(data =>res.json(data))
                        .catch(err => res.json(err));
    				},
    				find: function(req,res){
                        Cake.findOne({_id:req.params.id})
                             .then(data => res.json(data))
                             .catch(err => res.json(err));
    					},
    				update: function(req,res){
                        Cake.findOne({_id:req.params.id})
                        .then(cake =>{
                            console.log('*************',req.body)
                            console.log(typeof(req.body.reviews))
                            cake.reviews.push(req.body.reviews[req.body.reviews.length -1])
                            return cake.save();
                    })
                             .then(data => res.json(data))
                             .catch(err => res.json(err));
    					}
				};

