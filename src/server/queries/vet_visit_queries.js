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
  },
  deleteVisit: function(visitId) {
    return VetVisit().where('id', visitId).delete();
  },
  updateVisit: function(visitId, date, vaccines, procedures, medications, pdf, personal_notes, vet_id, pet_id) {
    return VetVisit().where('id', visitId)
    .update({
      visit_date: date,
      vaccines: vaccines,
      procedures: procedures,
      medications: medications,
      pdf: pdf,
      personal_notes: personal_notes,
      vet_id: vet_id,
      pet_id: pet_id
    })
  }
}