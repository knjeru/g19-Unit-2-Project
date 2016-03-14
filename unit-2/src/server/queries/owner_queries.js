var knex = require('../db/knex');

function Owners() {
  return knex('owners');
}

module.exports = {
  getOwners: function(){
    return Owners().select();
  },
  getOneOwner: function(id){
    return Owners().where('id', id);
  },
  createOwner: function(owner){
    return Owners().insert(owner, 'id');
  },
  updateOwner: function(owner, id){
    return Owners().where('id', id).update(owner, 'id');
  },
  deleteOwner: function(id){
    return Owners().where('id', id).delete();
  },
  getLoginInfo: function(email){
    return Owners().select('email', 'password').where('email', email);
  }
};