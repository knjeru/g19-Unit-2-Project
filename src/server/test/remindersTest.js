var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var knex = require('../db/knex');

var should = chai.should();

chai.use(chaiHttp);

describe('Reminders API routes', function() {
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

  describe('Add a single reminder', function() {
      it('should add a single reminder into the db', function(done){
        chai.request(server)
        .post('/api/reminders/new')
        .send({
                description: 'Canine Parvovirus Vaccination',
                date: '10-10-2016',
                pet_id: 1,
                owner_id: 1
            })
        .end(function(error, response){
          chai.request(server)
          .get('/api/reminders/' +response.body)
          .end(function(err, res){
            res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('description');
                res.body[0].description.should.equal('Canine Parvovirus Vaccination');
                res.body[0].should.have.property('date');
                res.body[0].date.should.equal('10-10-2016');
                done();
          });
        });
      });
    }
  );

  describe('Get all reminders', function() {

        it('should get all reminders', function(done) {
            chai.request(server)
            .get('/api/reminders')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('description');
                res.body[0].description.should.equal('meningitis vaccination');
                res.body[0].should.have.property('date');
                res.body[0].date.should.equal('11-11-2016');
                done();
            });
        });
    });

  describe('Get one reminder by id', function() {

      it('should get one pet corresponding to a single id', function(done) {
          chai.request(server)
          .get('/api/reminders/1')
          .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('description');
                res.body[0].description.should.equal('meningitis vaccination');
                res.body[0].should.have.property('date');
                res.body[0].date.should.equal('11-11-2016');
                done();
              });
        });
    });

    describe('Update a single reminder', function() {
      it('should update a single reminder in the db', function(done){
        chai.request(server)
        .put('/api/reminders/1/edit')
        .send({
                description: 'canine hepatitis vaccination',
                date: '10-10-2016',
                pet_id: 1,
                owner_id: 1
            })
        .end(function(error, response){
          chai.request(server)
          .get('/api/reminders/' +response.body)
          .end(function(err, res){
            res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('description');
                res.body[0].description.should.equal('canine hepatitis vaccination');
                res.body[0].should.have.property('date');
                res.body[0].date.should.equal('10-10-2016');
                done();
            });
          });
        });
      }
    );

    describe('Delete a single reminder', function(){
      it('should delete a reminder', function(done) {
            chai.request(server)
            .delete('/api/reminders/1/delete')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
        });
    });

});