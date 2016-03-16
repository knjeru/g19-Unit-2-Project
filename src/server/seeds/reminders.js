var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'reminders',
  file: '../../data/reminders.csv'
});
