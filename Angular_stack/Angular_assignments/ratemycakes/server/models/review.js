const ReviewSchema = new mongoose.Schema({
    ratings: {type:[Number], required: true, minimum: 1,maximum:5},
    comments: {type:[String]},
},{timestamps: true});
const Review = mongoose.model('Review', ReviewSchema);
module.exports =  Review;