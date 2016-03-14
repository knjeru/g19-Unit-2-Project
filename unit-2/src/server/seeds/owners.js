var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'owners',
  file: '../../data/owners.csv'
});
