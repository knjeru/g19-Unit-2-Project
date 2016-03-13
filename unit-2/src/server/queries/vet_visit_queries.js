var knex = require('../db/knex');

function VetVisit() {
  return knex('vet_visits');
}

module.exports = {
  getVetVisits: function(){
    return VetVisits().select();
  }
}