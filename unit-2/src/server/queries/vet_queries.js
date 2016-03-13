var knex = require('../db/knex');

function Vets() {
  return knex('vets');
}

module.exports = {
  getVets: function(){
    return Vets().select();
  }
}