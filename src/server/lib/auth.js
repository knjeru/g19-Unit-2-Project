var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

var knex = require('../db/knex');
var helpers = require('./helpers');


passport.use(new LocalStrategy({
  usernameField: 'email'
}, function(email, password, done) {
    console.log(email, password);
    // does the email exist?
    knex('owners').where('email', email)
    .then(function(data) {
      // email does not exist. return error.
      if (!data.length) {
        return done('Incorrect email and/or password.');
      }
      var user = data[0];
      // email found but do the passwords match?
      if (helpers.comparePassword(password, user.password)) {
        // passwords match! return user
        return done(null, user.id);
      } else {
        // passwords don't match! return error
        return done('Incorrect email and/or password.');
      }
    })
    .catch(function(err) {
      // issue with SQL/nex query
      return done('Incorrect email and/or password.');
    });
  }
));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK
  },
  function(accessToken, refreshToken, profile, done) {
    knex('owners').select().where('facebookId', profile.id).then(function (data) {
      if (data.length){
        process.nextTick(function(){
          return done(null, data[0].id );
        });
      } else {
          console.log("inserting!!!");
          knex('owners').insert({facebookId: profile.id, firstName: profile.displayName}, 'id').then(
            function(data){
              process.nextTick(function(){
              return done(null, data[0]);
            });
          });
        }
    });
  }
));

// sets the user to 'req.user' and establishes a session via a cookie
passport.serializeUser(function(owner, done) {
  done(null, owner);
});

// used on subsequent requests to update 'req.user' and updates session
passport.deserializeUser(function(id, done) {
  // done(null, id);
  // // The above code is a placeholder for what is below.  Req.user is not being saved
  // // in the session
  knex('owners').where('id', id)
  .then(function(data) {
    return done(null, data[0]);
  })
  .catch(function(err) {
    return done(err);
  });
});


module.exports = passport;