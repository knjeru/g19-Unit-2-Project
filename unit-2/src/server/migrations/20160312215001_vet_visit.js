
exports.up = function(knex, Promise) {
  return knex.schema.createTable('vet_visits', function(table){
    table.increments();
    table.date('visit_date');
    table.string('name');
    table.string('vaccines');
    table.string('procedures');
    table.string('medications');
    table.string('pdf');
    table.string('personal_notes');
    table.integer('vet_id');
    table.integer('pet_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vet_visits');
};
