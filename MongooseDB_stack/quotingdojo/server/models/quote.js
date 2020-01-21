const mongoose  = require('mongoose')



const QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    quote: {type: String, requited: true, minlength: 6}
},{timestamps: true});
// create an object that contains methods for mongoose to interface with MongoDB
const Quote = mongoose.model('Quote', QuoteSchema);
module.exports =  Quote;

