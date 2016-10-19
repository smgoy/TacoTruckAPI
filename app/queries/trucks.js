var db = require('../../config/db');
var helpers = require('./query_helpers');

function getAllTrucks(req, res) {
  var response = {};
  db.Truck.find({}, function(err, data){
    if (err) {
      response = {"error" : true, "message" : "Error fetching data"};
    } else {
      response = helpers.parseData(data, 'name', 'id');
    }
    res.json(response);
  });
}

function addTruck(req, res) {
  var truck = new db.Truck();
  truck.name = req.body.name;

  truck.save(function(err) {
    if (err) {
      res.status(422);
      res.json(err);
    } else {
      res.json({name: truck.name, id: truck.id});
    }
  });
}

function updateTruck(req, res) {
  var name = helpers.capitalize(req.params.truck);
  db.Truck.findOne({
    name
  }, function(err, truck) {
    if (err) {
      res.json(err);
    } else {
      truck.name = req.query.name;
      truck.save(function(error) {
        if(error) {
          res.json(err);
        } else {
          res.json({message: `Truck updated to ${truck.name}`});
        }
      });
    }
  });
}

function deleteTruck(req, res) {
  var id = req.params.id;
  db.Truck.findById(id, function(err, truck) {
    if (err) {
      res.json(err);
    } else {
      truck.remove(function(error) {
        if(error) {
          res.json(error);
        } else {
          res.json({message: `${truck.name} deleted`});
        }
      });
    }
  });
}

module.exports = {
  getAllTrucks,
  addTruck,
  updateTruck,
  deleteTruck
};
