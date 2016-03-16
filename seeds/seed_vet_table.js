var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'vets',
  file: './data/vets.csv'
});
