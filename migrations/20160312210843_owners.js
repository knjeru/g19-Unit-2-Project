
exports.up = function(knex, Promise) {
  return knex.schema.createTable('owners', function(table){
    table.increments();
    table.string('firstName').notNullable();
    table.string('lastName');
    table.string('email').unique();
    table.string('password');
    table.string('street_address');
    table.string('city');
    table.string('state');
    table.string('zipcode');
    table.string('phone');
    table.string('facebookId');
    table.text('image');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('owners');
};
