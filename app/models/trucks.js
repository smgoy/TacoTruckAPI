var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var TruckSchema = mongoose.Schema({
  name: {
    type : String,
    unique: true,
    required: [true, 'You must enter a truck name']
  }
});

TruckSchema.plugin(uniqueValidator, { message: 'The truck name you chose is already taken' });

module.exports = mongoose.model('Truck', TruckSchema);
