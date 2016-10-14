var express = require('express');
var router = express.Router();

//Queries
var tacos = require('./queries/tacos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/tacos', tacos.getAllTacos);

module.exports = router;
