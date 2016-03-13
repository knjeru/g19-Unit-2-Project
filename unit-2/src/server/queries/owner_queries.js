var knex = require('../db/knex');

function Owners() {
  return knex('owners');
}

module.exports = {
  getOwners: function(){
    return Owners().select();
  }
}