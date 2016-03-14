var express = require('express');
var router = express.Router();

var knex = require('../db/knex');
var passport = require('../lib/auth');
var helpers = require('../lib/helpers');

function Owners() {
  return knex('owners');
}

function Vets() {
  return knex('vets');
}

// router.get('/', helpers.ensureAuthenticated, function(req, res, next) {
//   res.render('index', {user: req.user});
// });

// router.get('/login', helpers.loginRedirect, function(req, res, next) {
//   res.render('login', {message: req.flash('message')});
// });

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user) {
    if (err) {
      return next(err);
    } else {
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        } else {
          return res.redirect('/');
        }
      });
    }
  })(req, res, next);
});

// router.get('/register', helpers.loginRedirect, function(req, res, next) {
//   res.render('register', {message: req.flash('message')});
// });

router.post('/register', function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  // check if email is unique
  Owners().where('email', email)
    .then(function(data){
      // if email is in the database send an error
      if(data.length) {
          req.flash('message', {
            status: 'danger',
            message: 'Email already exists.!'
          });
          return res.redirect('/register');
      } else {
        // hash and salt the password
        var hashedPassword = helpers.hashing(password);
        // if email is not in the database insert it
        Owners().insert({
          email: email,
          password: hashedPassword
        })
        .then(function(data) {
          req.flash('message', {
            status: 'success',
            message: 'Welcome!'
          });
          return res.redirect('/login');
        })
        .catch(function(err) {
          return res.send('Didn\'t work');
        });
      }
    })
    .catch(function(err){
      return next(err);
    });
});

router.get('/logout', helpers.ensureAuthenticated, function(req, res, next) {
  req.logout();
  res.redirect('/');
});


module.exports = router;