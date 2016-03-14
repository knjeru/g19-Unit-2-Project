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
  }
};