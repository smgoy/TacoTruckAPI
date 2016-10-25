var mongoose = require('mongoose');
mongoose.connect('mongodb://smgoy:password123@ds031167.mlab.com:31167/tacotruckapi');

var Truck = require('../app/models/trucks');
var Taco = require('../app/models/tacos');
var seeds = require('./seeds');

Truck.remove({}, () => console.log('Dropped Truck Data'));
Taco.remove({}, () => {
  console.log('Dropped Taco Data');
  seeds();
});


module.exports = {
  Truck,
  Taco
};
