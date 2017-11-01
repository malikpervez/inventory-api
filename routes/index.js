var express = require('express');
var router = express.Router();

var db = require('../queries');

router.get('/api/inventory', db.getAllInventory);
router.get('/api/inventory/:id', db.getSingleInventory);
router.post('/api/inventory', db.createInventory);
router.delete('./api/inventory/:id', db.removeInventory);

module.exports = router;
