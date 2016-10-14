var db = require('../../config/db');

//Standard display for tacos
function parseTacos(tacos) {
  return tacos.map( taco => {
      return ({
        name: taco.name,
        truck: taco.truck,
        ingredients: taco.ingredients
      });
  });
}

//capitalize words
function capitalize(string) {
  return string.split(' ').map(word => {
    var lowerCase = word.toLowerCase();
    return lowerCase[0].toUpperCase() + lowerCase.slice(1, lowerCase.length);
  }).join(' ');
}

function getAllTacos(req, res){
  var response = {};
  db.Taco.find({}, function(err, data){
    if (err) {
      response = {"error" : true, "message" : "Error fetching data"};
    } else {
      response = { data: parseTacos(data) };
    }
    res.json(response);
  });
}

function getTacosByTruck(req, res) {
  var response = {};
  var truck = capitalize(req.params.truck.replace('-', ' '));
  console.log(truck);
  db.Taco.find({
    truck
  }, function(err, data){
    if (err) {
      response = {"error" : true, "message" : "Error fetching data"};
    } else {
      response = { data: parseTacos(data) };
    }
    res.json(response);
  });
}

module.exports = {
  getAllTacos,
  getTacosByTruck
};
