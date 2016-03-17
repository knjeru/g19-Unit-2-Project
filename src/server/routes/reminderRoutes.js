var express = require('express');
var router = express.Router();
var query = require('../queries/reminder_queries');
var helpers = require('../lib/helpers');

// get ALL reminders
router.get('/', helpers.ensureAuthenticated, function(req, res, next){
  query.getReminders().then(function(reminders){
    res.json(reminders);
  });
});

// get a single reminder by id
router.get('/:id', helpers.ensureAuthenticated, function(req, res, next){
	query.getOneReminder(req.params.id).then(function(reminder){
	  res.json(reminder);
	});
});

// add new reminder
router.post('/new', helpers.ensureAuthenticated, function(req, res, next){
	query.addReminder(req.body).then(function(reminder){
	  res.json(reminder[0]);
	});
});

// update reminder by id
router.put('/:id/edit', helpers.ensureAuthenticated, function(req, res, next){
	query.updateReminder(req.body, req.params.id).then(function(reminder){
	  res.json(reminder[0]);
	});
});

// delete reminder by id
router.delete('/:id/delete', helpers.ensureAuthenticated, function(req, res, next){
	query.deleteReminder(req.params.id).then(function(){
	  res.json('Deleted');
	});
});

module.exports = router;