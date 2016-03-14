
exports.up = function(knex, Promise) {
  return knex.schema.createTable('vet_visits', function(table){
    table.increments();
    table.date('visit_date');
    table.string('vaccines').defaultTo('none');
    table.string('procedures').defaultTo('none');
    table.string('medications').defaultTo('none');
    table.string('pdf');
    table.text('personal_notes');
    table.integer('vet_id').references('vets', 'id');
    table.integer('pet_id').references('pets', 'id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vet_visits');
};
