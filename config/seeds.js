var Truck = require('../app/models/trucks');
var Taco = require('../app/models/tacos');

Truck.create({name: 'Taco Bamba'});
Truck.create({name: 'District Taco'});
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
Taco.create({
  name: 'Al Pastor',
  truck: 'District Taco',
  ingredients: [
    'Pork',
    'Shredded Cheese',
    'Pico de Gallo',
    'Jalepenos'
  ]
});

console.log('seeded!');
