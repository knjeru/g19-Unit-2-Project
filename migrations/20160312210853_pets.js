
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pets', function(table){
    table.increments();
    table.string('name').notNullable();
    table.string('type').notNullable();
    table.string('breed');
    table.string('picture_url');
    table.decimal('weight');
    table.string('allergies');
    table.string('illnesses');
    table.date('last_vet_visit');
    table.text('likes');
    table.text('dislikes');
    table.text('products');
    table.integer('owner_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pets');
};
