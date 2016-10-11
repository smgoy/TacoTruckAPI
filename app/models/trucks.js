var mongoose = require('mongoose');

var TruckSchema = mongoose.Schema({
  name: {type : String, required: true}
});

module.exports = mongoose.model('Truck', TruckSchema);

// //truck test
// var truck = new Truck({name: "Taco Bamba"});
// //save it
// truck.save(function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(truck);
//   }
// });
