
exports.up = function(knex, Promise) {
  return knex.schema.createTable('owners', function(table){
    table.increments();
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.string('street_address');
    table.string('city');
    table.string('state');
    table.string('zipcode')
    table.string('phone');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('owners');
};
