var db = require('../../config/db');
var helpers = require('./query_helpers');

function getAllTacos(req, res){
  db.Truck.findById(req.params.truckID, function(err, truck) {
    db.Taco.find({truck: truck.name}, function(error, data){
      if (err) {
        res.json({"error" : true, "message" : "Error fetching data"});
      } else {
        res.json(helpers.parseData(data, 'name', 'ingredients', 'id'));
      }
    });
  });
}

function addTaco(req, res) {
  var taco = new db.Taco();
  db.Truck.findById(req.body.truckID, function(err, truck) {
    taco.truck = truck.name;
    taco.name = req.body.name;
    taco.ingredients = req.body['ingredients[]'];

    taco.save(function(error) {
      if (error) {
        res.status(422);
        res.json(error.errors);
      } else {
        res.json({name: taco.name, id: taco.id, ingredients: taco.ingredients});
      }
    });
  });
}

function updateTaco(req, res) {
  var tacoID = req.params.id;
  db.Taco.findById(tacoID, function(err, taco){
    taco.name = req.body.name;
    taco.ingredients = req.body['ingredients[]'];

    taco.save(function(error) {
      if (error) {
        res.status(422);
        res.json(error.errors);
      } else {
        res.json({name: taco.name, id: taco.id, ingredients: taco.ingredients});
      }
    });
  });
}

function deleteTaco(req, res) {
  var tacoID = req.params.id;
  console.log(tacoID);
  db.Taco.findById( tacoID, function(err, taco) {
    var deletedTaco = taco;
    if (err) {
      res.json(err);
    } else {
      taco.remove(function(error) {
        if(error) {
          res.json(error);
        } else {
          res.json({
            name: deletedTaco.name,
            id: deletedTaco.id,
            ingredients: deletedTaco.ingredients
          });
        }
      });
    }
  });
}

module.exports = {
  getAllTacos,
  addTaco,
  updateTaco,
  deleteTaco
};
