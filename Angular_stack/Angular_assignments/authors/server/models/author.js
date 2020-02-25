	const mongoose  = require('mongoose')
	const AuthorSchema = new mongoose.Schema({
    		name: {type: String, required: [true,"Author name is requiured."], minlength: [3, "Author name must be at least 3 letters long"]},
    		quote: {type: String, minlength: 3}
	},{timestamps: true});
	const Author = mongoose.model('Author', AuthorSchema);
	module.exports =  Author;

