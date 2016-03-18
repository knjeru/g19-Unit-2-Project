var knex = require('../db/knex');

function Reminders() {
  return knex('reminders');
}

module.exports = {
  getReminders: function(id){
    return Reminders().select().where('owner_id', id);
  },
  getOneReminder: function(id){
    return Reminders().where('id', id);
  },
  deleteReminder: function(id){
  	return Reminders().del().where('id',id);
  },
  updateReminder: function(description, date, pet_id, id){
  	return Reminders().update({
      description: description,
      date: date,
      pet_id: pet_id
    }).where('id',id);
  },
  addReminder: function(description, date, pet_id, owner_id){
    return Reminders().insert({
      description: description,
      date: date,
      pet_id: pet_id
    }).where('owner_id', owner_id)
  }
}