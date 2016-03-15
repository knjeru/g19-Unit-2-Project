var express = require('express');
var router = express.Router();

var knex = require('../db/knex');
var passport = require('../lib/auth');
var helpers = require('../lib/helpers');

var query = require('../queries/owner_queries');

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user) {
    if (err) {
      return next(err);
    } else {
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        } else {
          return res.json('You\'re logged in!');
        }
      });
    }
  })(req, res, next);
});

router.post('/register', function(req, res, next) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var password = req.body.password;
  // check if email is unique
  query.getLoginInfo(email)
    .then(function(data){
      // if email is in the database send an error
      if(data.length) {
          req.flash('message', {
            status: 'danger',
            message: 'Email already exists.!'
          });
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
          req.flash('message', {
            status: 'success',
            message: 'Welcome!'
          });
          return res.json('You\'ve registered!');
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

router.get('/auth/facebook',
  passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

router.get('/logout', helpers.ensureAuthenticated, function(req, res, next) {
  req.logout();
  res.redirect('/');
});


module.exports = router;