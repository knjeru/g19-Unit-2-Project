var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var knex = require('../db/knex');

var should = chai.should();

chai.use(chaiHttp);

describe('Owner API routes', function() {
  beforeEach(function(done) {
      knex.migrate.rollback().then(function() {
          knex.migrate.latest()
          .then(function() {
              return knex.seed.run().then(function() {
                  done();
              });
          });
      });
  });

  afterEach(function(done) {
      knex.migrate.rollback().then(function() {
          done();
      });
  });
});