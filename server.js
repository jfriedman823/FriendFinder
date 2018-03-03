// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Require API routes
var apiRoutes = require('./app/routing/apiRoutes');

// Set up Express Server
var app = express();
var PORT = process.env.PORT || 3000;

// Set up bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Call APIRoutes and HTMLRoutes functions
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Listen
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });