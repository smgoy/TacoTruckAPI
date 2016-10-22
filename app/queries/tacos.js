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
        res.json(error);
      } else {
        res.json({name: taco.name, id: taco.id, ingredients: taco.ingredients});
      }
    });
  });
}

function updateTaco(req, res) {
  var name = helpers.capitalize(req.params.taco.replace('-', ' '));
  var query = req.query;
  db.Taco.update({ name }, { $set: query }, function(err) {
    if(err) {
      res.json(err);
    } else {
      res.json({message: 'Taco updated'});
    }
  });
}

function deleteTaco(req, res) {
  var tacoID = req.params.id;
  console.log(tacoID);
  db.Taco.findById( tacoID, function(err, taco) {
    if (err) {
      console.log('find error');
      res.json(err);
    } else {
      taco.remove(function(error) {
        if(error) {
          console.log(taco);
          console.log('remove error');
          res.json(error);
        } else {
          console.log(taco);
          res.json({name: taco.name, id: taco.id, ingredients: taco.ingredients});
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
