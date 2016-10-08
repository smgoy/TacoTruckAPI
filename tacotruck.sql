DROP DATABASE IF EXISTS tacotrucks;
CREATE DATABASE tacotrucks;

\c tacotrucks;

CREATE TABLE trucks (
  ID SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);

CREATE TABLE ingredients (
  ID SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);

CREATE TABLE tacos (
  ID SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  truck_id INTEGER references trucks(ID) NOT NULL UNIQUE
);

CREATE TABLE taco_ingredients (
  ID SERIAL PRIMARY KEY,
  taco_id INTEGER references tacos(ID) NOT NULL,
  ingredient_id INTEGER references ingredients(ID) NOT NULL
);

INSERT INTO trucks (name)
  VALUES ('Taco Bamba');

INSERT INTO ingredients (name)
  VALUES ('Grilled Chicken'), ('Ancho Mayo'), ('Cucumber Mayo'),
         ('Chipotle Yogart');

INSERT INTO tacos (name, truck_id)
  VALUES ('Arabe', 1);

INSERT INTO taco_ingredients (taco_id, ingredient_id)
  VALUES (1, 1), (1, 2), (1, 3), (1, 4)
