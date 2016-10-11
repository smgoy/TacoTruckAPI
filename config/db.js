var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tacoTruckAPI');

var seeds = require('./seeds');
seeds();

var Truck = require('../app/models/trucks');
var Taco = require('../app/models/tacos');

module.exports = {
  Truck,
  Taco
};
