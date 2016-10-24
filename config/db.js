var mongoose = require('mongoose');
mongoose.connect('mongodb://smgoy:password123@ds031167.mlab.com:31167/tacotruckapi');

var Truck = require('../app/models/trucks');
var Taco = require('../app/models/tacos');

module.exports = {
  Truck,
  Taco
};
