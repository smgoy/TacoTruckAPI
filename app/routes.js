var express = require('express');
var router = express.Router();

//Queries
var tacos = require('./queries/tacos');
var trucks = require('./queries/trucks');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/tacos', tacos.getAllTacos);
router.get('/api/tacos/:truck', tacos.getTacosByTruck);
router.get('/api/trucks', trucks.getAllTrucks);
router.post('/api/trucks', trucks.addTruck);
router.put('/api/trucks/:truck', trucks.updateTruck);
router.delete('/api/trucks/:truck', trucks.deleteTruck);

module.exports = router;
