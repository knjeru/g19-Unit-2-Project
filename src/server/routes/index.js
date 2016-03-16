var express = require('express');
var router = express.Router();

var knex = require('../db/knex');
var passport = require('../lib/auth');
var helpers = require('../lib/helpers');

var query = require('../queries/owner_queries');


router.get('/facebook',
  passport.authenticate('facebook'),
  function(req, res){});

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res, next) {
    console.log("Req user ", req.user);
    // Successful authentication, redirect home.
    res.redirect('/');
});


module.exports = router;
