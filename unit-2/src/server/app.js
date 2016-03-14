// *** main dependencies *** //
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// *** routes *** //
var routes = require('./routes/index.js');
var petRoutes = require('./routes/petRoutes.js');
var vetRoutes = require('./routes/vetRoutes.js');
var vetVisits = require('./routes/vetVisitRoutes.js');
var ownerRoutes = require('./routes/ownerRoutes.js');


// *** express instance *** //
var app = express();


// *** view engine *** //
app.set('view engine', 'html');


// *** static directory *** //



// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/')));


// *** main routes *** //
app.use('/', routes);
app.use('/api/pets', petRoutes);
app.use('/api/profiles', ownerRoutes);
app.use('/api/vets', vetRoutes);
app.use('/api/vet_visits', vetVisits);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// *** error handlers *** //

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
