	mongoose = require('mongoose')
	module.exports = mongoose.connect('mongodb://localhost/authors_db', {useNewUrlParser: true});
