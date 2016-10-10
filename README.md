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
