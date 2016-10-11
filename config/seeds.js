var Truck = require('../app/models/trucks');
var Taco = require('../app/models/tacos');

module.exports = function () {
  Truck.create({name: 'Taco Bamba'});
  Taco.create({
    name: 'Arabe',
    truck: 'Taco Bamba',
    ingredients: [
      'Grilled Chicken',
      'Ancho Mayo',
      'Cucumber Mayo',
      'Chipotle Yogart'
    ]
  });
  Taco.create({
    name: 'Spicy Shroom',
    truck: 'Taco Bamba',
    ingredients: [
      'Chipotle Portabella',
      'Grilled Corn',
      'Cotija',
      'Pepitas'
    ]
  });
};
