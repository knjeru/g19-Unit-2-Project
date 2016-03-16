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

  describe('Get all vets', function() {

        it('should get all vets', function(done) {
            chai.request(server)
            .get('/api/vets')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('name');
                res.body[0].name.should.equal('Highlands Animal Clinic');
                res.body[0].should.have.property('email');
                res.body[0].email.should.equal('info@highlandsanimalclinic.com');
                res.body[0].should.have.property('password');
                res.body[0].password.should.equal('$2a$08$0Frk5C/SlWvCjMxfUjkRKOBylTDEVMwDXASj6Cp.i5ctgk/xM95Aa');
                res.body[0].should.have.property('streetAddress');
                res.body[0].streetAddress.should.equal('3727 W32nd Ave');
                res.body[0].should.have.property('city');
                res.body[0].city.should.equal('Denver');
                res.body[0].should.have.property('state');
                res.body[0].state.should.equal('CO');
                res.body[0].should.have.property('zipcode');
                res.body[0].zipcode.should.equal(80211);
                res.body[0].should.have.property('phone');
                res.body[0].phone.should.equal('303-455-7387');
                res.body[0].should.have.property('website');
                res.body[0].website.should.equal('highlandsanimalclinic.com');
                res.body[0].should.have.property('licenses');
                res.body[0].licenses.should.equal('Academic Veterinarian');
                done();
            });
        });
    });

  describe('Get one vet by id', function() {

      it('should get one vet corresponding to a single id', function(done) {
          chai.request(server)
          .get('/api/vets/1')
          .end(function(err, res) {
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('array');
              res.body[0].should.have.property('name');
              res.body[0].name.should.equal('Highlands Animal Clinic');
              res.body[0].should.have.property('email');
              res.body[0].email.should.equal('info@highlandsanimalclinic.com');
              res.body[0].should.have.property('password');
              res.body[0].password.should.equal('$2a$08$0Frk5C/SlWvCjMxfUjkRKOBylTDEVMwDXASj6Cp.i5ctgk/xM95Aa');
              res.body[0].should.have.property('streetAddress');
              res.body[0].streetAddress.should.equal('3727 W32nd Ave');
              res.body[0].should.have.property('city');
              res.body[0].city.should.equal('Denver');
              res.body[0].should.have.property('state');
              res.body[0].state.should.equal('CO');
              res.body[0].should.have.property('zipcode');
              res.body[0].zipcode.should.equal(80211);
              res.body[0].should.have.property('phone');
              res.body[0].phone.should.equal('303-455-7387');
              res.body[0].should.have.property('website');
              res.body[0].website.should.equal('highlandsanimalclinic.com');
              res.body[0].should.have.property('licenses');
              res.body[0].licenses.should.equal('Academic Veterinarian');
              done();
              });
        });
    });

  describe('Add one vet', function() {

      it('should add one vet into the db', function(done) {
          chai.request(server)
          .post('/api/vets/new')
          .send({
                name: 'Tender Touch Animal Hospital',
                email: 'info@tendertouchvet.com',
                password: '',
                streetAddress: '350 Kalamath Street',
                city: 'Denver',
                state: 'CO',
                zipcode: '80223',
                phone: '303-733-2728',
                website: 'www.tendertouchvet.com',
                licenses: 'Academic Veterinarian'
              })
          .end(function(error, response){
            chai.request(server)
            .get('/api/vets/' +response.body)

          .end(function(err, res) {
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('array');
              res.body[0].should.have.property('name');
              res.body[0].name.should.equal('Tender Touch Animal Hospital');
              res.body[0].should.have.property('email');
              res.body[0].email.should.equal('info@tendertouchvet.com');
              res.body[0].should.have.property('password');
              res.body[0].password.should.equal('');
              res.body[0].should.have.property('streetAddress');
              res.body[0].streetAddress.should.equal('350 Kalamath Street');
              res.body[0].should.have.property('city');
              res.body[0].city.should.equal('Denver');
              res.body[0].should.have.property('state');
              res.body[0].state.should.equal('CO');
              res.body[0].should.have.property('zipcode');
              res.body[0].zipcode.should.equal(80223);
              res.body[0].should.have.property('phone');
              res.body[0].phone.should.equal('303-733-2728');
              res.body[0].should.have.property('website');
              res.body[0].website.should.equal('www.tendertouchvet.com');
              res.body[0].should.have.property('licenses');
              res.body[0].licenses.should.equal('Academic Veterinarian');
              done();
              });
        });
    });
  });

  describe('Update a vet', function() {

      it('should update one vet in the db', function(done) {
          chai.request(server)
          .put('/api/vets/1/edit')
          .send({
                name: 'Highlands Animal Clinic',
                email: 'info@highlandsanimalclinic.com',
                password: '$2a$08$0Frk5C/SlWvCjMxfUjkRKOBylTDEVMwDXASj6Cp.i5ctgk/xM95Aa',
                streetAddress: '3727 W32nd Ave',
                city: 'Denver',
                state: 'CO',
                zipcode: '80211',
                phone: '303-455-7387',
                website: 'www.highlandsanimalclinic.com',
                licenses: 'Academic Veterinarian'
              })
          .end(function(error, response){
            console.log("vet id? ", response.body);
            chai.request(server)
            .get('/api/vets/' +response.body)

          .end(function(err, res) {
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('array');
              res.body[0].should.have.property('name');
              res.body[0].name.should.equal('Highlands Animal Clinic');
              res.body[0].should.have.property('email');
              res.body[0].email.should.equal('info@highlandsanimalclinic.com');
              res.body[0].should.have.property('password');
              res.body[0].password.should.equal('$2a$08$0Frk5C/SlWvCjMxfUjkRKOBylTDEVMwDXASj6Cp.i5ctgk/xM95Aa');
              res.body[0].should.have.property('streetAddress');
              res.body[0].streetAddress.should.equal('3727 W32nd Ave');
              res.body[0].should.have.property('city');
              res.body[0].city.should.equal('Denver');
              res.body[0].should.have.property('state');
              res.body[0].state.should.equal('CO');
              res.body[0].should.have.property('zipcode');
              res.body[0].zipcode.should.equal(80211);
              res.body[0].should.have.property('phone');
              res.body[0].phone.should.equal('303-455-7387');
              res.body[0].should.have.property('website');
              res.body[0].website.should.equal('www.highlandsanimalclinic.com');
              res.body[0].should.have.property('licenses');
              res.body[0].licenses.should.equal('Academic Veterinarian');
              done();
              });
        });
    });
  });


  describe('Delete a vet', function(){
    it('should delete a vet', function(done) {
          chai.request(server)
          .delete('/api/vets/1/delete')
          .end(function(err, res) {
              res.should.have.status(200);
              res.should.be.json;
              done();
          });
      });
  });


});


