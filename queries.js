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
  updateInventory: updateInventory,
  removeInventory: removeInventory
};

//Get all inventory
