var express = require('express');
var router = express.Router();

var db = require('../config/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function parseTacos(tacos) {
  return tacos.map( taco => {
      return ({
        name: taco.name,
        truck: taco.truck,
        ingredients: taco.ingredients
      });
  });
}

router.get('/api/tacos', function(req, res){
  var response = {};
  db.Taco.find({}, function(err, data){
    if (err) {
      response = {"error" : true, "message" : "Error fetching data"};
    } else {
      response = { data: parseTacos(data) };
    }
    res.json(response);
  });
});

module.exports = router;
