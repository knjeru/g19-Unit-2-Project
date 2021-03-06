var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var knex = require('../db/knex');

var should = chai.should();

chai.use(chaiHttp);

describe('Pet API routes', function() {
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

  describe('Add a single pet', function() {
      it('should add a single pet into the db', function(done){
        chai.request(server)
        .post('/api/pets/new')
        .send({
                name: 'Archibald',
                type: 'Dog',
                breed: 'Pomeranian',
                picture_url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Pomeranian.JPG',
                weight: '8',
                allergies: 'Everything',
                illnesses: 'Everyting',
                last_vet_visit: '2016-03-12T00:00:00.000Z',
                owner_id: 1
            })
        .end(function(error, response){
          chai.request(server)
          .get('/api/pets/' +response.body)
          .end(function(err, res){
            res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('name');
                res.body[0].name.should.equal('Archibald');
                res.body[0].should.have.property('type');
                res.body[0].type.should.equal('Dog');
                res.body[0].should.have.property('breed');
                res.body[0].breed.should.equal('Pomeranian');
                res.body[0].should.have.property('picture_url');
                res.body[0].picture_url.should.equal('https://upload.wikimedia.org/wikipedia/commons/c/ca/Pomeranian.JPG');
                res.body[0].should.have.property('weight');
                res.body[0].weight.should.equal('8.00');
                res.body[0].should.have.property('allergies');
                res.body[0].allergies.should.equal('Everything');
                res.body[0].should.have.property('illnesses');
                res.body[0].illnesses.should.equal('Everyting');
                res.body[0].should.have.property('last_vet_visit');
                res.body[0].last_vet_visit.should.equal('2016-03-12T00:00:00.000Z')
                done();
          });
        });
      });
    }
  );

  describe('Get all pets', function() {

        it('should get all pets', function(done) {
            chai.request(server)
            .get('/api/pets')
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
                res.body[0].weight.should.equal('100.00');
                res.body[0].should.have.property('allergies');
                res.body[0].allergies.should.equal('none');
                res.body[0].should.have.property('illnesses');
                res.body[0].illnesses.should.equal('none');
                res.body[0].should.have.property('last_vet_visit');
                res.body[0].last_vet_visit.should.equal('2016-03-12T00:00:00.000Z')
                // res.body[0].should.have.property('owner_id');  //Need to add ref
                done();
            });
        });
    });

  describe('Get one pet by id', function() {

      it('should get one pet corresponding to a single id', function(done) {
          chai.request(server)
          .get('/api/pets/1')
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
                res.body[0].weight.should.equal('100.00');
                res.body[0].should.have.property('allergies');
                res.body[0].allergies.should.equal('none');
                res.body[0].should.have.property('illnesses');
                res.body[0].illnesses.should.equal('none');
                res.body[0].should.have.property('last_vet_visit');
                res.body[0].last_vet_visit.should.equal('2016-03-12T00:00:00.000Z')
                done();
              });
        });
    });

    describe('Update a single pet', function() {
      it('should update a single pet in the db', function(done){
        chai.request(server)
        .put('/api/pets/1/edit')
        .send({
                name: 'Archibald2',
                type: 'Dog',
                breed: 'Pomeranian',
                picture_url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Pomeranian.JPG',
                weight: '8',
                allergies: 'Everything',
                illnesses: 'Everyting',
                last_vet_visit: '2016-03-12T00:00:00.000Z',
                owner_id: 1
            })
        .end(function(error, response){
          chai.request(server)
          .get('/api/pets/' +response.body)
          .end(function(err, res){
            res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('name');
                res.body[0].name.should.equal('Archibald2');
                res.body[0].should.have.property('type');
                res.body[0].type.should.equal('Dog');
                res.body[0].should.have.property('breed');
                res.body[0].breed.should.equal('Pomeranian');
                res.body[0].should.have.property('picture_url');
                res.body[0].picture_url.should.equal('https://upload.wikimedia.org/wikipedia/commons/c/ca/Pomeranian.JPG');
                res.body[0].should.have.property('weight');
                res.body[0].weight.should.equal('8.00');
                res.body[0].should.have.property('allergies');
                res.body[0].allergies.should.equal('Everything');
                res.body[0].should.have.property('illnesses');
                res.body[0].illnesses.should.equal('Everyting');
                res.body[0].should.have.property('last_vet_visit');
                res.body[0].last_vet_visit.should.equal('2016-03-12T00:00:00.000Z')
                done();
            });
          });
        });
      }
    );

    describe('Delete a single pet', function(){
      it('should delete a pet', function(done) {
            chai.request(server)
            .delete('/api/pets/1/delete')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
        });
    });

});