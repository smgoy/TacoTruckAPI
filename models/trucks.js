var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tacoTruckAPI');

var TruckSchema = new mongoose.Schema({
  name: String
});

var Truck = mongoose.model('Truck', TruckSchema);

//truck test
var truck = new Truck({name: "Taco Bamba"});
//save it
truck.save(function(err){
  if (err) {
    console.log(err);
  } else {
    console.log(truck);
  }
});

module.exports = Truck;
