#Taco Truck API

Welcome to my Taco Truck API. This API was a small project to help familiarize myself with creating my very own API that uses NodeJS for the backend. Additionally, this project uses ExpressJS to help create a server, PostgreSQL for the database and pg-promise.js to help manage the database connection.

This README will be used to help myself walk through what I have learned.

##Setting up the Database

For this project I have setup a tacotrucks database with 4 tables.

###trucks
| column name   | data type     | details     |
| ------------- | ------------- | --------    |
| ID            | integer       | not null, primary key |
| name          | string        | not null    |

###ingredients
| column name   | data type     | details     |
| ------------- | ------------- | --------    |
| ID            | integer       | not null, primary key |
| name          | string        | not null, unique    |

###tacos
| column name   | data type     | details     |
| ------------- | ------------- | --------    |
| ID            | integer       | not null, primary key |
| name          | string        | not null, unique with truck_id    |
| truck_id      | integer       | not null, unique with name    |

###taco_ingredients
| column name   | data type     | details     |
| ------------- | ------------- | --------    |
| ID            | integer       | not null, primary key |
| ingredient_id  | integer       | not null    |
| taco_id      | integer       | not null    |

In this taco truck world, there are a few rules.
- Each taco must be unique
- Tacos are patented, so the trucks cannot sell the same taco

To help reinforce these rules I have put some restrictions on the data going into the database. I am also going to explore writing custom validations so that the user of this API can know that they need to follow these rules when sending `POST` requests.

##Starting out with a simple DB query

Let's start out with a simple query and select all of the rows from the tacos table.

In `routes/index.js` we want to make sure we have access to out `queries.js` file
```javascript
var db = require('../queries');
```
Then we need to add the route
```javascript
router.get('/api/tacos', db.getAllTacos);
```
Finally in `queries.js` we need to write the SQL to query the database and send back a 200, all okay, to display the data in a JSON format. For this step we need to write a function that uses pg-promise.js so that all of our SQL queries are returned as promises.

Here's the setup:
```javascript
var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/tacotrucks';
var db = pgp(connectionString);
```

Here's the `requestAllTacos` function:
```javascript
function getAllTacos (req, res, next) {
  db.any('select * from tacos')
    .then(function (tacos) {
      res.status(200)
        .json({
          status: 'success',
          data: tacos,
          message: 'all the tacos'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
```

Boot up the server `npm start` and make a `GET` request to `localhost:3000/api/tacos` and you will see our JSON object with all of our tacos (in this case only two) in the data key.
```
{
  "status":"success",
  "data":[
          {"id":1,"name":"Arabe","truck_id":1},
          {"id":2,"name":"Spicy Shroom","truck_id":1}
         ],
  "message":"Retrieved ALL tacos"
}
```
But what if I want to display the name of the truck instead of the truck ID or what if I wanted to show all if the ingredients in each of the tacos? We're going to need some `JOIN`s for that.
