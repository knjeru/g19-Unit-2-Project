var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'vet_visits',
  file: '../../data/vet_visit.csv'
});
