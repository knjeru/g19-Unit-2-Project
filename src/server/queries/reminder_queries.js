var knex = require('../db/knex');

function Reminders() {
  return knex('reminders');
}

module.exports = {
  getReminders: function(){
    return Reminders().select();
  },
  getOneReminder: function(id){
    return Reminders().where('id', id);
  },
  deleteReminder: function(id){
  	return Reminders().del().where('id',id);
  },
  updateReminder: function(reminder, id){
  	return Reminders().update(reminder,'id').where('id',id);
  },
  addReminder: function(reminder){
    return Reminders().insert(reminder,'id');
  }
}