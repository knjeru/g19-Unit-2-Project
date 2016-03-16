var express = require('express');
var router = express.Router();
var query = require('../queries/owner_queries');
var helpers = require('../lib/helpers');

router.get('/', helpers.ensureAuthenticated, function(req, res, next){
  query.getOwners().then(function(owners){
    res.json(owners);
  });
});

router.get('/:id', helpers.ensureAuthenticated, function(req, res, next){
  query.getOneOwner(req.params.id).then(function(owner){
    res.json(owner);
  });
});

router.post('/new', helpers.ensureAuthenticated, function(req, res, next){
  query.createOwner(req.body).then(function(owner){
    res.json(owner[0]);
  });
});

router.put('/:id/edit', helpers.ensureAuthenticated, function(req, res, next){
  query.updateOwner(req.body, req.params.id).then(function(owner){
    res.json(owner[0]);
  });
});

router.delete('/:id/delete', helpers.ensureAuthenticated, function(req, res, next){
  query.deleteOwner(req.params.id).then(function(){
    res.json('Deleted');
  });
});

module.exports = router;
