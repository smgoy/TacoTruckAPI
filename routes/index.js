var express = require('express');
var router = express.Router();

var mongoOp = require('../models/trucks');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/tacos', function(req, res){
  var response = {};
  mongoOp.find({}, function(err, data){
    if (err) {
      response = {"error" : true,"message" : "Error fetching data"};
    } else {
      response = {"error" : false,"message" : data};
    }
    res.json(response);
  });
});

module.exports = router;
