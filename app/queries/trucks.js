var db = require('../../config/db');
var helpers = require('./query_helpers');

function getAllTrucks(req, res) {
  var response = {};
  db.Truck.find({}, function(err, data){
    if (err) {
      response = {"error" : true, "message" : "Error fetching data"};
    } else {
      response = { data: helpers.parseData(data, 'name')};
    }
    res.json(response);
  });
}

module.exports = {
  getAllTrucks
};
