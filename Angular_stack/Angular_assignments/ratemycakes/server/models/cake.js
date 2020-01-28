const mongoose  = require('mongoose')
const review = require('./review.js')
const CakeSchema = new mongoose.Schema({
        baker: {type: String, required: true, minlength: 3},
        image: {type: String, required: true},
        reviews: {type:[review.ReviewSchema]}
},{timestamps: true});
const Cake = mongoose.model('Cake', CakeSchema);
module.exports =  Cake;