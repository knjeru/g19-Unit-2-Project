var express = require('express');
var router = express.Router();
var query = require('../queries/vet_queries');

router.get('/', function(req, res, next){
  query.getVets().then(function(vets){
    res.json(vets);
  });
});

router.delete('/:id/delete', function(req, res, next){
  query.deleteVet(req.params.id).then(function(vet){
    res.redirect('/');
  });
});


router.put('/:id/edit', function(req, res, next){
	var id = req.body.id;
  query.updateVet(req.params.id).then(function(vet){
    res.redirect(`/${id}`);
  });
});


router.get('/:id', function(req, res, next){
  query.getOneVet(req.params.id).then(function(vet){
    res.json(vet);
  });
});


module.exports = router;