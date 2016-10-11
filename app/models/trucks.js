var mongoose = require('mongoose');

var TruckSchema = mongoose.Schema({
  name: {type : String, required: true}
});

module.exports = mongoose.model('Truck', TruckSchema);
