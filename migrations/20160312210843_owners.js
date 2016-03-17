
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
    table.text('owner_image').default('http://outlineicon.com/wp-content/uploads/2015/09/add-user.png');
    table.string('vet_name');
    table.text('vet_image').default('http://www.clipartbest.com/cliparts/9iR/gko/9iRgkoEkT.jpeg');
    table.string('vet_street');
    table.string('vet_city');
    table.string('vet_state');
    table.string('vet_zip');
    table.string('vet_email');
    table.string('vet_phone');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('owners');
};
