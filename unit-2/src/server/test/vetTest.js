var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var knex = require('../db/knex');

var should = chai.should();

chai.use(chaiHttp);

describe('Vet API routes', function() {
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

  // describe('Get all vets', function() {

  //       it('should get all pets', function(done) {
  //           chai.request(server)
  //           .get('/pets')
  //           .end(function(err, res) {
  //               res.should.have.status(200);
  //               res.should.be.json;
  //               res.body.should.be.a('array');
  //               res.body[0].should.have.property('name');
  //               res.body[0].name.should.equal('Leopold');
  //               res.body[0].should.have.property('type');
  //               res.body[0].type.should.equal('Dog');
  //               res.body[0].should.have.property('breed');
  //               res.body[0].breed.should.equal('Dingo')
  //               res.body[0].should.have.property('picture_url');
  //               res.body[0].picture_url.should.equal('http://ichef-1.bbci.co.uk/news/660/media/images/58682000/jpg/_58682918_wild_dog_screz.jpg')
  //               res.body[0].should.have.property('weight');
  //               res.body[0].weight.should.equal('100');
  //               res.body[0].should.have.property('allergies');
  //               res.body[0].allergies.should.equal('none');
  //               res.body[0].should.have.property('illnesses');
  //               res.body[0].illnesses.should.equal('none');
  //               res.body[0].should.have.property('last_vet_visit');
  //               res.body[0].last_vet_visit.should.equal('Sat Mar 12 2016 22:59:15Z')
  //               res.body[0].should.have.property('tendencies');
  //               res.body[0].tendencies.should.equal('eats');
  //               res.body[0].should.have.property('favorites');
  //               res.body[0].favorites.should.equal('food');
  //               // res.body[0].should.have.property('owner_id');  //Need to add ref
  //               done();
  //           });
  //       });
  //   });

  describe('Get one vet by id', function() {

      it('should get one pet corresponding to a single id', function(done) {
          chai.request(server)
          .get('/pets/1')
          .end(function(err, res) {
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('array');
              res.body[0].should.have.property('name');
              res.body[0].name.should.equal('Leopold');
              res.body[0].should.have.property('type');
              res.body[0].type.should.equal('Dog');
              res.body[0].should.have.property('breed');
              res.body[0].breed.should.equal('Dingo')
              res.body[0].should.have.property('picture_url');
              res.body[0].picture_url.should.equal('http://ichef-1.bbci.co.uk/news/660/media/images/58682000/jpg/_58682918_wild_dog_screz.jpg')
              res.body[0].should.have.property('weight');
              res.body[0].weight.should.equal('100');
              res.body[0].should.have.property('allergies');
              res.body[0].allergies.should.equal('none');
              res.body[0].should.have.property('illnesses');
              res.body[0].illnesses.should.equal('none');
              res.body[0].should.have.property('last_vet_visit');
              res.body[0].last_vet_visit.should.equal('Sat Mar 12 2016 22:59:15Z')
              res.body[0].should.have.property('tendencies');
              res.body[0].tendencies.should.equal('eats');
              res.body[0].should.have.property('favorites');
              res.body[0].favorites.should.equal('food');
              done();
              });
        });
    });

    // describe('Add a single pet', function() {
    //   it('should add a single pet into the db', function(done){
    //     chai.request(server);
    //     .post('/pets/')
    //   });
    // }

});