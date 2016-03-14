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

router.post('/new', function(req, res, next){
  console.log(req.body);
  query.createPet(req.body).then(function(pet){
    res.json(pet[0]);
  });
});

router.put('/pets/:id/edit', function(req, res, next){
  query.updatePet(req.params.id, req.body).then(function(pet){
    res.json(pet[0]);
  });
});

router.post('/pets/:id/delete', function(req, res, next){
  res.json('TODO');
});

module.exports = router;