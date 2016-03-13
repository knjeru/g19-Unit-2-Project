var express = require('express');
var router = express.Router();
var query = require('../queries/pet_queries');

router.get('/', function(req, res, next){
  query.getPets().then(function(pets){
    res.json(pets);
  });
});

module.exports = router;