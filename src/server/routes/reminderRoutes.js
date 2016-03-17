var express = require('express');
var router = express.Router();
var query = require('../queries/reminder_queries');
var helpers = require('../lib/helpers');

router.get('/', helpers.ensureAuthenticated, function(req, res, next){
  query.getOwners().then(function(owners){
    res.json(owners);
  });
});

router.get('/:id', helpers.ensureAuthenticated, function(req, res, next){

});

router.post('/new', helpers.ensureAuthenticated, function(req, res, next){

});

router.put('/:id/edit', helpers.ensureAuthenticated, function(req, res, next){

});

router.delete('/:id/delete', helpers.ensureAuthenticated, function(req, res, next){

});

module.exports = router;