var express = require('express');
var router = express.Router();
var query = require('../queries/reminder_queries');
var helpers = require('../lib/helpers');

// get ALL reminders
router.get('/:owner_id', helpers.ensureAuthenticated, function(req, res, next){
  query.getReminders(req.params.owner_id).then(function(reminders){
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
router.post('/:user_id/new', helpers.ensureAuthenticated, function(req, res, next){
	console.log(req.body);
	var newReminder = req.body;
	query.addReminder(newReminder.description, newReminder.date, newReminder.pet_id, req.params.user_id).then(function(reminder){
		console.log(reminder);
	  res.json(reminder[0]);
	});
});

// update reminder by id
router.put('/:id/edit', helpers.ensureAuthenticated, function(req, res, next){
	console.log(req.params.id);
	console.log(updateReminder);
	var updateReminder = req.body;
	query.updateReminder(updateReminder.description, updateReminder.date, updateReminder.pet_id, req.params.id).then(function(reminder){
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