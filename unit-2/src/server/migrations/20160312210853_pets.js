
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pets', function(table){
    table.increments();
    table.string('name').notNullable();
    table.string('type').notNullable();
    table.string('breed');
    table.string('picture_url');
    table.string('weight');
    table.string('allergies');
    table.string('illnesses');
    table.string('last_vet_visit'); //This needs to change to date type
    table.text('tendencies');
    table.text('favorites');
    table.integer('owner_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pets');
};
