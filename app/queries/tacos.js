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

function addTaco(req, res) {
  var taco = new db.Taco();
  taco.name = req.query.name;
  taco.truck = req.query.truck;
  taco.ingredients = req.query.ingredients;

  taco.save(function(err) {
    if (err) {
      res.json(err);
    } else {
      res.json({ message: `${taco.name} created!` });
    }
  });
}

function updateTaco() {

}

function deleteTaco() {

}

module.exports = {
  getAllTacos,
  getTacosByTruck,
  addTaco,
  updateTaco,
  deleteTaco
};
