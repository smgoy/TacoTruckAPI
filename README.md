# Taco Truck API

Welcome to my Taco Truck API. This RESTful API serves a simple CRUD application to keep track of taco trucks and the different tacos they sell. Fun! The purpose of this applications was to familiarize myself with creating a NodeJS backend and a noSQL database.

[Checkout the Live Link!](https://tacotruckapi.herokuapp.com/)

This README will be used to help myself walk through what I have learned.

## Technologies

Backend:
- NodeJS
- Express
- MongoDB
- Mongoose

Frontend:
- React
- Redux

## noSQL

I am familiar with SQL—a database containing tables, rows and columns—but I wanted to explore the world of noSQL—a database with collections and documents.

noSQL is very similar to JSON object with keys and values. Lets look at a couple documents from my Truck collection:

```javascript
  [
    {
      id: 1
      name: 'Taco Bamba'
    },

    {
      id: 2
      name: 'District Taco'
    }
  ]
```

One thing I found pretty cool about a noSQL database was the flexibility of datatypes that could be stored as values. What do I mean by this? Let's look at a document from my Tacos collection:

```javascript
  {
    name: 'Arabe',
    truck: 'Taco Bamba',
    ingredients: [
      'Grilled Chicken',
      'Ancho Mayo',
      'Cucumber Mayo',
      'Chipotle Yogart'
    ]
  }
```

Arrays are valid values! This is pretty cool and simplifies SQL's dreaded joins. However, it's pretty easy to think of a situation where an array within a document could get infinitely large or be unnecessarily repeating data. But without joins how can we refer to other documents?

## Look ma, no joins!

Just as arrays are valid keys, documents are too, known as 'embedded documents'. Let's take a look at my Tacos collection to see how this could work.

```javascript
  {
    name: 'Arabe',
    truck: 'Taco Bamba',
    ingredients: [
      {name: 'Grilled Chicken'},
      {name: 'Ancho Mayo'},
      {name: 'Cucumber Mayo'},
      {name: 'Chipotle Yogart'},
    ]
  }
```

In this case the ingredients are an array of documents referencing the individual ingredients. It is also possible to reference these embedded documents by ID so to avoid duplication.

```javascript
  {
    name: 'Arabe',
    truck: 'Taco Bamba',
    ingredients: [1, 2, 3, 4]
  }

  {
    id: 1
    name: 'Grilled Chicken',
  }

  {
    id: 2,
    name: 'Ancho Mayo'
  }

  {
    id: 3,
    name: 'Cucumber Mayo'
  }

  {
    id: 4,
    name: 'Chipotle Yogart'
  }
```

In my case of the Tacos collection, I chose to use and array of the ingredients names because the name was the only attribute I was interested in; however, if I were to have included nutritional facts, I would have used embedded documents.

### noSQL Conclusion
What I understand about noSQL is it's a lot easier to scale and change collection's structure, but without that structure that SQL databases have, you loose the ability to slice and associate data as well as SQL databases.

## Validations

Validations were a bit different with MongoDB, luckily Mongoose provides a great API to help out with writing validations.

```javascript
var TruckSchema = mongoose.Schema({
  name: {
    type : String,
    unique: true,
    required: [true, 'You must enter a truck name']
  }
});
```

With Mongoose, when defining a collection's schema you can define certain attributes that you would like a particular key to follow. One thing I was a disappointed about was that Mongoose does not have a unique validator! No worries, for this I used `mongoose-unique-validator` npm library that requires one simple line of code that gives me access to the unique key above.

```javascript
TruckSchema.plugin(uniqueValidator, { message: 'The truck name you chose is already taken' });
```

Lastly, I want to look at how you send back those errors so the frontend and user has access to why a validation may be failing.

```javascript
function addTruck(req, res) {
  var truck = new db.Truck();
  truck.name = req.body.name;

  truck.save(function(err) {
    if (err) {
      res.status(422);
      res.json(err.errors.name);
    } else {
      res.json({name: truck.name, id: truck.id});
    }
  });
}
```

`truck.save()` takes a callback where if an error occurs, it can be accessed at the errors key. Here I am sending the errors specific to the name key in the Truck collection (remember the truck collection only holds a name).

## API Endpoints

Express helped out a lot with their built in router. My API hosts endpoints for both Tacos and Trucks.

```javascript
//taco API routes
router.get('/api/tacos/:truckID', tacos.getAllTacos);
router.post('/api/tacos', tacos.addTaco);
router.put('/api/tacos/:id', tacos.updateTaco);
router.delete('/api/tacos/:id', tacos.deleteTaco);

//truck API routes
router.get('/api/trucks', trucks.getAllTrucks);
router.post('/api/trucks', trucks.addTruck);
router.put('/api/trucks/:id', trucks.updateTruck);
router.delete('/api/trucks/:id', trucks.deleteTruck);
```

The express router helps you define the HTTP request, requiring two inputs—the URI and a callback function that queries the database. Additionally, Mongoose helps simplify queries with their API. Let's take a look at the `trucks.getAllTrucks` callback.

```javascript
function getAllTrucks(req, res) {
  var response = {};
  db.Truck.find({}, function(err, data){
    if (err) {
      response = {"error" : true, "message" : "Error fetching data"};
    } else {
      response = helpers.parseData(data, 'name', 'id');
    }
    res.json(response);
  });
}
```

The callback takes two arguments—request and response. The request contains all of the information the client sent on request and in this case the response is sent back in JSON format with the requested information (given there is no error).

## Conclusion

Node and Express were both fun to work with and and interesting transition coming from Rails—which takes out a lot of the decisions I had to make with Node. With this project I learnt a lot more about how the server interacts with the database server and connects to the frontend of an application.

I only highlighted the backend of the project in this README, but go to the [live page](https://tacotruckapi.herokuapp.com/) to checkout some of the cool frontend features I implemented like inline editing, specific validation feedback and visual effects.
