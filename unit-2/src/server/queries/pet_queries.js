var knex = require('../db/knex');

function Pets() {
  return knex('pets');
}

module.exports = {
  getPets: function(){
    return Pets().select();
  },
  getOnePet: function(id){
    return Pets().where('id', id);
  },
  createPet: function(pet){
    return Pets().insert(pet, 'id');
  },
  updatePet: function(pet, id){
    return Pets().where('id', id).update(pet);
  },
  deletePet: function(id){
    return Pets().where('id', id).delete();
  }
};