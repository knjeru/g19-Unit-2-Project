
exports.up = function(knex, Promise) {
  return knex.schema.createTable('owners', function(table){
    table.increments();
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.string('Address');
    table.string('Phone');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('owners');
};
