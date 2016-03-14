var express = require('express');
var router = express.Router();
var query = require('../queries/pet_queries');

router.get('/', function(req, res, next){
  query.getPets().then(function(pets){
    res.json(pets);
  });
});

router.get('/:id', function(req, res, next){
  query.getOnePet(req.params.id).then(function(pet){
    res.json(pet);
  });
});

module.exports = router;