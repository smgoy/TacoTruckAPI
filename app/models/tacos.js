var mongoose = require('mongoose');

var TacoSchema = mongoose.Schema({
  name: {type : String, required: [true, "Taco name"]},
  truck: {type : String, required : true},
  ingredients: {type : Array, required: [true, "Ingredients"]}
});

module.exports = mongoose.model('Taco', TacoSchema);
