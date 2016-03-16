var express = require('express');
var router = express.Router();
var query = require('../queries/pet_queries');
var helpers = require('../lib/helpers');

router.get('/', helpers.ensureAuthenticated, function(req, res, next){
  query.getPets().then(function(pets){
    res.json(pets);
  });
});

router.get('/:id', helpers.ensureAuthenticated, function(req, res, next){
  query.getOnePet(req.params.id).then(function(pet){
    res.json(pet);
  });
});

router.post('/new', helpers.ensureAuthenticated, function(req, res, next){
  query.createPet(req.body).then(function(pet){
    res.json(pet[0]);
  });
});

router.put('/:id/edit', helpers.ensureAuthenticated, function(req, res, next){
  query.updatePet(req.body, req.params.id).then(function(pet){
    res.json(pet[0]);
  });
});

router.delete('/:id/delete', helpers.ensureAuthenticated, function(req, res, next){
  query.deletePet(req.params.id).then(function(){
    res.json('Deleted');
  });
});

module.exports = router;