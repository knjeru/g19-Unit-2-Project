
exports.up = function(knex, Promise) {
  return knex.schema.createTable(function(table){
    table.increments();
    table.text('description').notNullable();
    table.date('date').notNullable();
    table.integer('vet_id').references('vets', 'id');
    table.integer('pet_id').references('pets', 'id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reminders');
};
