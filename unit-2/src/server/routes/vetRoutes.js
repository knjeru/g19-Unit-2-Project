var express = require('express');
var router = express.Router();
var query = require('../queries/vet_queries');

// get ALL vets
router.get('/', function(req, res, next){
  query.getVets().then(function(vets){
    res.json(vets);
  });
});

// add new vet
router.post('/new', function(req, res, next){
  query.addVet().then(function(vet){
    res.redirect('/');
  });
});

// delete vet by id
router.delete('/:id/delete', function(req, res, next){
  query.deleteVet(req.params.id).then(function(vet){
    res.redirect('/');
  });
});

// update vedt by id
router.put('/:id/edit', function(req, res, next){
	var id = req.body.id;
  query.updateVet(req.params.id).then(function(vet){
    res.redirect(`/${id}`);
  });
});

// get a single vet by id
router.get('/:id', function(req, res, next){
  query.getOneVet(req.params.id).then(function(vet){
    res.json(vet);
  });
});


module.exports = router;