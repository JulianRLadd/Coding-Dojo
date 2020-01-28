mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/ratemycakes_db', {useNewUrlParser: true});