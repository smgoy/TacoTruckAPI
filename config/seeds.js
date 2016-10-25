var Truck = require('../app/models/trucks');
var Taco = require('../app/models/tacos');


function seed() {
  console.log('Seeding...');

  Truck.create({name: 'Taco Bamba'});
  Truck.create({name: 'District Taco'});
  Truck.create({name: 'Uno Dos Taco'});
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
    truck: 'Taco Bamba',
    ingredients: [
      'Pork',
      'Shredded Cheese',
      'Pico de Gallo',
      'Jalepenos'
    ]
  });
  Taco.create({
    name: 'Taco Bamba',
    truck: 'Taco Bamba',
    ingredients: [
      'Skirt Steak',
      'Chorizo',
      'Grilled Guacamole',
      'Chicharrones'
    ]
  });
  Taco.create({
    name: 'El Beso',
    truck: 'Taco Bamba',
    ingredients: [
      'Chrispy Pork',
      'Charred Scallions',
      'Chili Aioli'
    ]
  });
  Taco.create({
    name: 'El Gringo',
    truck: 'Taco Bamba',
    ingredients: [
      'Ground Beef',
      'Bacon',
      'American Cheese',
      'Ranch Dressing'
    ]
  });
  Taco.create({
    name: 'Veggie',
    truck: 'District Taco',
    ingredients: [
      'Pinto Beans',
      'Cheese',
      'Sauteed Onions',
      'Green Pepers'
    ]
  });
  Taco.create({
    name: 'Carne Asada',
    truck: 'District Taco',
    ingredients: [
      'Steak',
      'Cheese',
      'Sauteed Onions',
      'Green Pepers'
    ]
  });
  Taco.create({
    name: 'Al Pastor',
    truck: 'District Taco',
    ingredients: [
      'Pork',
      'Chopped Jalepenos',
      'Pineapple',
      'Green Pepers'
    ]
  });
  Taco.create({
    name: 'Asada',
    truck: 'Uno Dos Taco',
    ingredients: [
      'Grilled Steak',
      'Roasted Salsa'
    ]
  });
  Taco.create({
    name: 'Vegetariano',
    truck: 'Uno Dos Taco',
    ingredients: [
      'Poblano',
      'Yellow Squash',
      'Onions',
      'Mushrooms'
    ]
  });
  Taco.create({
    name: 'Pescado',
    truck: 'Uno Dos Taco',
    ingredients: [
      'Wild Fried Cod',
      'Chipotle Salsa',
      'Onions'
    ]
  });
  Taco.create({
    name: 'Lengua',
    truck: 'Uno Dos Taco',
    ingredients: [
      'Beef Toungue',
      'Tomatillo Salsa',
      'mushrooms'
    ]
  });

  console.log('Done!');
}

module.exports = seed;
