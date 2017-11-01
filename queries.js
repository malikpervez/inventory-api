var promise = require('bluebird');

var options = {
  //initialization options
  promiseLib: promise
}

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/inventory';
var db = pgp(connectionString);


//add query functtions

module.exports = {
  getAllInventory: getAllInventory,
  getSingleInventory: getSingleInventory,
  createInventory: createInventory,
  removeInventory: removeInventory
};

//Get all inventory
function getAllInventory(req, res, next) {
  db.any('select * from inventory')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL inventory'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
