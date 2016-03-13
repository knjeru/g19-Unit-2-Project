
exports.up = function(knex, Promise) {
  return knex.schema.createTable('vets', function(table){
    table.increments();
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.string('location').notNullable();
    table.string('phone').notNullable();
    table.string('website');
    table.string('licenses');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vets');
};
