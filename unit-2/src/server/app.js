require('dotenv').config();
// *** main dependencies *** //
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');

var cookieSession = require('cookie-session');
var passport = require('./lib/auth');
var FacebookStrategy = require('passport-facebook').Strategy;

// *** routes *** //
var routes = require('./routes/index.js');
var petRoutes = require('./routes/petRoutes.js');
var vetRoutes = require('./routes/vetRoutes.js');
var vetVisits = require('./routes/vetVisitRoutes.js');
var ownerRoutes = require('./routes/ownerRoutes.js');
var authRoutes = require('./routes/authRoutes.js');
var imageUpload = require('./routes/imageUpload.js')



// *** express instance *** //
var app = express();

// *** static directory *** //
app.set('views', path.join(__dirname, 'views'));


// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
  name: 'oauth-session',
  keys: [process.env.COOKIE_KEY1, process.env.COOKIE_KEY2]
}));
app.use(session({
  secret: process.env.SECRET_KEY || 'change_me',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../client/')));

// *** main routes *** //
app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../client/app/views/', 'index.html'));
});
// app.use('/', routes);
app.use('/api/pets', petRoutes);
app.use('/api/profile', ownerRoutes);
app.use('/api/vets', vetRoutes);
app.use('/api/vet_visits', vetVisits);
app.use('/api/auth', authRoutes);
app.use('/img', imageUpload);



// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });


// *** error handlers *** //

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

module.exports = app;
