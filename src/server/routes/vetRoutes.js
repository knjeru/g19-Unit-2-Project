var express = require('express');
var router = express.Router();
var query = require('../queries/vet_queries');
var helpers = require('../lib/helpers');

// get ALL vets
router.get('/', helpers.ensureAuthenticated, function(req, res, next){
  query.getVets().then(function(vets){
    res.json(vets);
  });
});

// add new vet
router.post('/new', helpers.ensureAuthenticated, function(req, res, next){
  query.addVet(req.body).then(function(vet){
    // res.redirect('/');
    res.json(vet[0]);
  });
});

// delete vet by id
router.delete('/:id/delete', helpers.ensureAuthenticated, function(req, res, next){
  query.deleteVet(req.params.id).then(function(){
    res.json('Deleted');
  });
});

// update vedt by id
router.put('/:id/edit', helpers.ensureAuthenticated, function(req, res, next){
  query.updateVet(req.body, req.params.id).then(function(vet){
    res.json(vet[0]);
  });
});

// get a single vet by id
router.get('/:id', helpers.ensureAuthenticated, function(req, res, next){
  query.getOneVet(req.params.id).then(function(vet){
    res.json(vet);
  });
});


module.exports = router;