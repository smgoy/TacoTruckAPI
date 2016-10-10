var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/tacotrucks';
var db = pgp(connectionString);

function getAllTacos (req, res, next) {
  db.tx(function(t) {
    return t.batch([
      t.one('select * from tacos'),
      t.one('select * from taco_ingredients where taco_id=$1', 1)
    ]);
  })
  .then(function (data) {
    res.status(200)
      .json(data);
  })
  .catch(function (err) {
      return next(err);
  });
}

module.exports = {
  getAllTacos: getAllTacos,
};

// res.status(200)
//   .json({
//     status: 'success',
//     data: tacos,
//     message: 'Retrieved ALL tacos'
//   });
