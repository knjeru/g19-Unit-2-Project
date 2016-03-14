var knex = require('../db/knex');

function Vets() {
  return knex('vets');
}

module.exports = {
  getVets: function(){
    return Vets().select();
  }
  getOneVet: function(id){
    return Vets().where('id', id);
  }
  deleteVet: function(id){
  	return Vets().del().where('id',id);
  }
  updateVet: function(){
  	return Vets().update({
  		name: name,
  		email: email,
  		password: password,
  		location: location,
  		phone: phone,
  		website: website,
  		licenses: licenses
  	}).where('id',id);
  }
}