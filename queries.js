var promise = require('bluebird');

var options = {
  //initialization options
  promiseLib: promise
}

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://<user>:<password>@localhost:5432/inventory';
var db = pgp(connectionString);


//add query functtions

module.exports = {

  getAllInventory: getAllInventory,
  getSingleInventory: getSingleInventory,
  createInventory: createInventory,
  updateInventory: updateInventory,
  removeInventory: removeInventory

};

function getAllInventory(req, res, next) {};
function getSingleInventory(req, res, next) {};
function createInventory(req, res, next){};
function updateInventory(req, res, next) {};
function removeInventory(req, res, next) {};


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

//Get single inventory
function getSingleInventory(req, res, next) {
  var inventoryID = parseInt(req.params.id);
  db.one('select * from inventory where id = $1', inventoryID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE inventory'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

//Create new inventory
function createInventory(req, res, next) {
  req.body.stock = parseInt(req.body.stock);
  db.none('insert into inventory(name, type, stock)' +
      'values(${name}, ${type}, ${stock})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one inventory'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

//update inventory
function updateInventory(req, res, next) {
  db.none('update inventory set name=$1, type=$2, stock=$3, where id=$4',
    [req.body.name, req.body.type, parseInt(req.body.stock), parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated inventory'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

//delete inventory
function removeInventory(req, res, next) {
  var inventoryID = parseInt(req.params.id);
  db.result('delete from inventory where id = $1', inventoryID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} puppy`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}
