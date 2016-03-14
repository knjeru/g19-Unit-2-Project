var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var knex = require('../db/knex');

var should = chai.should();

chai.use(chaiHttp);

describe('Vet Visit API routes', function() {
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

  describe('Get vet visits per pet', function() {
    it('Should return all visits for your pet', function(done) {
      chai.request(server)
      .get('/api/vet_visits/1')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body[0].should.have.property('vaccines');
        res.body[0].vaccines.should.equal('none');
        res.body[0].should.have.property('procedures');
        res.body[0].procedures.should.equal('clawclip');
        res.body[0].should.have.property('medications');
        res.body[0].medications.should.equal('none');
        res.body[0].should.have.property('pdf');
        res.body[0].pdf.should.equal('none');
        res.body[0].should.have.property('personal_notes');
        res.body[0].personal_notes.should.equal('Everything went well! No complications.');
        res.body[0].should.have.property('vet_id');
        res.body[0].vet_id.should.equal(1);
        res.body[0].should.have.property('vet_id');
        res.body[0].pet_id.should.equal(1);
        done();
      })
    });
  });

  describe('Add new vet visit', function() {
    it('Should add a new vet visit for your pet', function(done) {
      chai.request(server)
      .post('/api/vet_visits/1/new_visit')
      .send({
        visit_date: '2016/1/23',
        vaccines: 'none',
        procedures: 'Flea Removal',
        medications: 'Flea Shampoo',
        pdf: 'none',
        personal_notes: 'The dog got fleas. We can fix it though.',
        vet_id: 1,
        pet_id: 1
      })
      .end(function(error, response) {
        chai.request(server)
        .get('/api/vet_visits/1/2')
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body[0].should.have.property('visit_date');
          res.body[0].visit_date.should.equal('2016-01-23T00:00:00.000Z');
          res.body[0].should.have.property('vaccines');
          res.body[0].vaccines.should.equal('none');
          res.body[0].should.have.property('procedures');
          res.body[0].procedures.should.equal('Flea Removal');
          res.body[0].should.have.property('medications');
          res.body[0].medications.should.equal('Flea Shampoo');
          res.body[0].should.have.property('pdf');
          res.body[0].pdf.should.equal('none');
          res.body[0].should.have.property('personal_notes');
          res.body[0].personal_notes.should.equal('The dog got fleas. We can fix it though.');
          res.body[0].should.have.property('vet_id');
          res.body[0].vet_id.should.equal(1);
          res.body[0].should.have.property('pet_id');
          res.body[0].pet_id.should.equal(1);
          done();
        })
      })
    });
  });

});