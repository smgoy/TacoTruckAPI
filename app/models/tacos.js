var mongoose = require('mongoose');

var TacoSchema = mongoose.Schema({
  name: {type : String, required : true},
  truck: {type : String, required : true},
  ingredients: {type : Array, required : true}
});

module.exports = mongoose.model('Taco', TacoSchema);
