var express = require('express');
var router = express.Router();

//Queries
var tacos = require('./queries/tacos');
var trucks = require('./queries/trucks');

/* GET index page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', {root: './views/'});
});

//taco API routes
router.get('/api/tacos/:truckID', tacos.getAllTacos);
router.get('/api/tacos/:truck', tacos.getTacosByTruck);
router.post('/api/tacos', tacos.addTaco);
router.put('/api/tacos/:taco', tacos.updateTaco);
router.delete('/api/tacos/:taco', tacos.deleteTaco);

//truck API routes
router.get('/api/trucks', trucks.getAllTrucks);
router.post('/api/trucks', trucks.addTruck);
router.put('/api/trucks/:id', trucks.updateTruck);
router.delete('/api/trucks/:id', trucks.deleteTruck);

module.exports = router;
