var express = require('express');
var router = express.Router();

var knex = require('../db/knex');
var passport = require('../lib/auth');
var helpers = require('../lib/helpers');

var query = require('../queries/owner_queries');

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user) {
    if (err) {
      return res.json(err);
    } else {
      req.logIn(user, function(err) {
        if (err) {
          return res.json(err);
        } else {
          return res.json(req.user);
        }
      });
    }
  })(req, res, next);
});

router.post('/register', function(req, res, next) {
  console.log(req.body);
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var password = req.body.password;
  // check if email is unique
  query.getLoginInfo(email)
    .then(function(data){
      // if email is in the database send an error
      if(data.length) {
          return res.json('Email already exists');
      } else {
        // hash and salt the password
        var hashedPassword = helpers.hashing(password);
        // if email is not in the database insert it
        query.createOwner({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hashedPassword
        })
        .then(function(data) {
          return res.json(req.user);
        })
        .catch(function(err) {
          return res.send(err);
        });
      }
    })
    .catch(function(err){
      return next(err);
    });
});


router.get('/logout', helpers.ensureAuthenticated, function(req, res, next) {
  req.session = null;
  req.logout();
  res.redirect('/');
});


module.exports = router;
