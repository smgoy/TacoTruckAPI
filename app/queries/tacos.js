var db = require('../../config/db');
var helpers = require('./query_helpers');

function getAllTacos(req, res){
  var response = {};
  db.Taco.find({}, function(err, data){
    if (err) {
      response = {"error" : true, "message" : "Error fetching data"};
    } else {
      response = {
        data: helpers.parseData(data, 'name', 'truck', 'ingredients')
      };
    }
    res.json(response);
  });
}

function getTacosByTruck(req, res) {
  var response = {};
  var truck = helpers.capitalize(req.params.truck.replace('-', ' '));
  console.log(truck);
  db.Taco.find({
    truck
  }, function(err, data){
    if (err) {
      response = {"error" : true, "message" : "Error fetching data"};
    } else {
      response = {
        data: helpers.parseData(data, 'name', 'truck', 'ingredients')
      };
    }
    res.json(response);
  });
}

module.exports = {
  getAllTacos,
  getTacosByTruck
};
