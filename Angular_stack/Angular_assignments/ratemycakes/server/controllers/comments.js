const mongoose  = require ('../config/mongoose.js')
const Comment = require('../models/comment.js')

		module.exports  = {
    			index: function(req, res) {
    				Comment.find()
	                    .then(data => res.json({comments: data}))
	                    .catch(err => res.json(err));
    			},
    			create: function(req, res) {
        			var comment = new Comment(req.body);
        			comment.save()
                        .then(data =>res.json(data))
                        .catch(err => res.json(err));
    				},
    				find: function(req,res){
                        Comment.findOne({_id:req.params.id})
                             .then(data => res.json(data))
                             .catch(err => res.json(err));
    					}
				};