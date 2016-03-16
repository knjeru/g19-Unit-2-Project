var express = require('express');
var router = express.Router();
var query = require('../queries/vet_visit_queries');
var helpers = require('../lib/helpers');

router.get('/:id', helpers.ensureAuthenticated, function(req, res, next){
  query.getVetVisits(req.params.id).then(function(data){
    res.json(data);
  });
});

router.get('/:id/:visitId', helpers.ensureAuthenticated, function(req, res, next) {
  query.getVisitById(req.params.visitId)
  .then(function(data) {
    res.json(data);
  })
})

router.post('/:id/new_visit', helpers.ensureAuthenticated, function(req, res, next) {
  var newVisit = req.body;
  query.newVetVisit(newVisit.date,newVisit.vaccines, newVisit.procedures, newVisit.medications, newVisit.pdf, newVisit.personal_notes, newVisit.vet_id, req.params.id)
  query.newVetVisit(req.body)
  .then(function() {
    return query.getVisitById(req.body.date)
  })
  .then(function(data) {
    res.json(data);
  })
})

router.delete('/:id/delete', helpers.ensureAuthenticated, function(req, res, next) {
  query.deleteVisit(req.params.id)
  .then(function() {
    res.json({
      message: 'success'
    })
  });
});

router.put('/:id/edit', helpers.ensureAuthenticated, function(req, res, next) {
  var updateVisit = req.body;
  console.log(updateVisit);
  query.updateVisit(req.params.id, updateVisit.visit_date, updateVisit.vaccines, updateVisit.procedures, updateVisit.medications, updateVisit.pdf, updateVisit.personal_notes, updateVisit.vet_id, updateVisit.pet_id)
  .then(function() {
    res.json({
      message: 'success'
    })
  })
})

module.exports = router;