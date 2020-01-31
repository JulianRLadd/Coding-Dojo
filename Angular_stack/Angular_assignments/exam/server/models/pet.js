	const mongoose  = require('mongoose')
	const PetSchema = new mongoose.Schema({
    		name: {type: String, required: [true,"Pet name is requiured."], unique: [true,"Pet name must be unique"], minlength: [3, "Pet name must be at least 3 letters long"]},
    		type: {type: String, required: [true,"Pet type is requiured."], minlength: [3, "Pet type must be at least 3 letters long"]},
    		description: {type: String, required: [true,"Pet description is requiured."], minlength: [3, "Pet description must be at least 3 letters long"]},
    		skill1: {type: String},
    		skill2: {type: String},
    		skill3: {type: String},
			likes: {type:Number, default:0}
	},{timestamps: true});
	const Pet = mongoose.model('Pet', PetSchema);
	module.exports =  Pet;
  PetSchema.path('name').validate(async (value) => {
    const nameCount = await mongoose.models.Pet.countDocuments({name: value });
    return !nameCount;
  }, 'Name already exists');