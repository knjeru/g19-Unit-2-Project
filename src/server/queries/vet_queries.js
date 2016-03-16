var knex = require('../db/knex');

function Vets() {
  return knex('vets');
}

module.exports = {
  getVets: function(){
    return Vets().select();
  },
  getOneVet: function(id){
    return Vets().where('id', id);
  },
  deleteVet: function(id){
  	return Vets().del().where('id',id);
  },
  updateVet: function(vet, id){
  	return Vets().update(vet,'id').where('id',id);
  },
  addVet: function(vet){
    return Vets().insert(vet,'id');
  }
}