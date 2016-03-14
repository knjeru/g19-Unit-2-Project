var knex = require('../db/knex');

function VetVisit() {
  return knex('vet_visits');
}

module.exports = {
  getVetVisits: function(id){
    return VetVisit().where('pet_id', id);
  },
  newVetVisit: function(visit) {
    return VetVisit().insert( visit, 'id');
  },
  getVisitById: function(visitId) {
    return VetVisit().where('id', visitId);
  }
}