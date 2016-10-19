#Taco Truck API

Welcome to my Taco Truck API. This RESTful API serves a simple CRUD application to keep track of taco trucks and the different tacos they sell. Fun! The purpose of this applications was to familiarize myself with creating a NodeJS backend and a noSQL database.

This README will be used to help myself walk through what I have learned.

##Technologies

- NodeJS
- Express
- MongoDB
- Mongoose
- React
- Redux

##noSQL

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
  [
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
  ]
```

Arrays are valid values! This is pretty cool and simplifies SQL's dreaded joins. However, it's pretty easy to think of a situation where an array within a document could get infinitely large or be unnecessarily repeating data. But without joins how can we refer to other documents?

##Look ma, no joins

Just as arrays are valid inputs, documents are too—known as inner documents.
