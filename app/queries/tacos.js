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

module.exports = {
  getAllTacos
};
