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

  describe('Add a single owner', function() {
      it('should add a single owner into the db', function(done){
        chai.request(server)
        .post('/api/profile/new')
        .send({
                firstName: 'Saffron',
                lastName: 'Von Hinglesbergermeister',
                email: 'saffmeister@gmail.com',
                password: '$2a$08$i.Z8gETe71TsBsynUT50COCE5kNYGv2tmDaycXHHvTEXtiY0ssGKO',
                street_address: '1920 Clearview Cir',
                city: 'Austin',
                state: 'TX',
                zipcode: '10101',
                phone: '720-555-5555'
            })
        .end(function(error, response){
          chai.request(server)
          .get('/api/profile/' +response.body)
          .end(function(err, res){
            res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('firstName');
                res.body[0].firstName.should.equal('Saffron');
                res.body[0].should.have.property('lastName');
                res.body[0].lastName.should.equal('Von Hinglesbergermeister');
                res.body[0].should.have.property('email');
                res.body[0].email.should.equal('saffmeister@gmail.com');
                res.body[0].should.have.property('password');
                res.body[0].password.should.equal('$2a$08$i.Z8gETe71TsBsynUT50COCE5kNYGv2tmDaycXHHvTEXtiY0ssGKO');
                res.body[0].should.have.property('street_address');
                res.body[0].street_address.should.equal('1920 Clearview Cir');
                res.body[0].should.have.property('city');
                res.body[0].city.should.equal('Austin');
                res.body[0].should.have.property('state');
                res.body[0].state.should.equal('TX');
                res.body[0].should.have.property('zipcode');
                res.body[0].zipcode.should.equal('10101');
                res.body[0].should.have.property('phone');
                res.body[0].phone.should.equal('720-555-5555');
                done();
          });
        });
      });
    }
  );

  describe('Get all pets', function() {

        it('should get all pets', function(done) {
            chai.request(server)
            .get('/api/profile')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('firstName');
                res.body[0].firstName.should.equal('Peewee');
                res.body[0].should.have.property('lastName');
                res.body[0].lastName.should.equal('Herman');
                res.body[0].should.have.property('email');
                res.body[0].email.should.equal('petlover1@gmail.com');
                res.body[0].should.have.property('password');
                res.body[0].password.should.equal('$2a$08$i.Z8gETe71TsBsynUT50COCE5kNYGv2tmDaycXHHvTEXtiY0ssGKO');
                res.body[0].should.have.property('street_address');
                res.body[0].street_address.should.equal('1919 Clearview Cir');
                res.body[0].should.have.property('city');
                res.body[0].city.should.equal('Austin');
                res.body[0].should.have.property('state');
                res.body[0].state.should.equal('TX');
                res.body[0].should.have.property('zipcode');
                res.body[0].zipcode.should.equal('10101');
                res.body[0].should.have.property('phone');
                res.body[0].phone.should.equal('555-555-5555');
                done();
            });
        });
    });

  describe('Get one owner by id', function() {

      it('should get one owner corresponding to a single id', function(done) {
          chai.request(server)
          .get('/api/profile/1')
          .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('firstName');
                res.body[0].firstName.should.equal('Peewee');
                res.body[0].should.have.property('lastName');
                res.body[0].lastName.should.equal('Herman');
                res.body[0].should.have.property('email');
                res.body[0].email.should.equal('petlover1@gmail.com');
                res.body[0].should.have.property('password');
                res.body[0].password.should.equal('$2a$08$i.Z8gETe71TsBsynUT50COCE5kNYGv2tmDaycXHHvTEXtiY0ssGKO');
                res.body[0].should.have.property('street_address');
                res.body[0].street_address.should.equal('1919 Clearview Cir');
                res.body[0].should.have.property('city');
                res.body[0].city.should.equal('Austin');
                res.body[0].should.have.property('state');
                res.body[0].state.should.equal('TX');
                res.body[0].should.have.property('zipcode');
                res.body[0].zipcode.should.equal('10101');
                res.body[0].should.have.property('phone');
                res.body[0].phone.should.equal('555-555-5555');
                done();
              });
        });
    });

    describe('Update a single owner', function() {
      it('should update a single owner in the db', function(done){
        chai.request(server)
        .put('/api/profile/1/edit')
        .send({
                firstName: 'Saffron2',
                lastName: 'Von Hinglesbergermeister',
                email: 'saffmeister@gmail.com',
                password: '$2a$08$i.Z8gETe71TsBsynUT50COCE5kNYGv2tmDaycXHHvTEXtiY0ssGKO',
                street_address: '1920 Clearview Cir',
                city: 'Austin',
                state: 'TX',
                zipcode: '10101',
                phone: '720-555-5555'
            })
        .end(function(error, response){
          chai.request(server)
          .get('/api/profile/' +response.body)
          .end(function(err, res){
            res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('firstName');
                res.body[0].firstName.should.equal('Saffron2');
                res.body[0].should.have.property('lastName');
                res.body[0].lastName.should.equal('Von Hinglesbergermeister');
                res.body[0].should.have.property('email');
                res.body[0].email.should.equal('saffmeister@gmail.com');
                res.body[0].should.have.property('password');
                res.body[0].password.should.equal('$2a$08$i.Z8gETe71TsBsynUT50COCE5kNYGv2tmDaycXHHvTEXtiY0ssGKO');
                res.body[0].should.have.property('street_address');
                res.body[0].street_address.should.equal('1920 Clearview Cir');
                res.body[0].should.have.property('city');
                res.body[0].city.should.equal('Austin');
                res.body[0].should.have.property('state');
                res.body[0].state.should.equal('TX');
                res.body[0].should.have.property('zipcode');
                res.body[0].zipcode.should.equal('10101');
                res.body[0].should.have.property('phone');
                res.body[0].phone.should.equal('720-555-5555');
                done();
            });
          });
        });
      }
    );

    describe('Delete a single owner', function(){
      it('should delete a owner', function(done) {
            chai.request(server)
            .delete('/api/profile/1/delete')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
        });
    });
});