DROP DATABASE IF EXISTS tacotrucks;
CREATE DATABASE tacotrucks;

\c tacotrucks;

CREATE TABLE tacos (
  ID SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  truck_id INTEGER references trucks(ID) NOT NULL UNIQUE
);

CREATE TABLE ingredients (
  ID SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);

CREATE TABLE taco_ingredients (
  ID SERIAL PRIMARY KEY,
  taco_id INTEGER references tacos(ID) NOT NULL,
  ingredient_id INTEGER references ingredients(ID) NOT NULL
);

CREATE TABLE trucks (
  ID SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);
