
exports.up = function(knex, Promise) {
  return knex.schema.createTable('vets', function(table){
    table.increments();
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.string('streetAddress').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.integer('zipcode').notNullable();
    table.string('phone').notNullable();
    table.string('website').defaultTo('none');
    table.string('licenses').defaultTo('none');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vets');
};
