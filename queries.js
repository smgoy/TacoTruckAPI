var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/tacotrucks';
var db = pgp(connectionString);

function getAllTacos (req, res, next) {
  db.any('select * from tacos')
    .then(function (tacos) {
      res.status(200)
        .json({
          status: 'success',
          data: tacos,
          message: 'Retrieved ALL tacos'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllTacos: getAllTacos,
};
