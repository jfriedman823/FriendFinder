// Dependencies holmes
var path = require('path');

// Pull in data
var profilesData = require('../data/profiles');

module.exports = function(app) {
    // GET Homepage
    app.get('/', function(request, response) {
      response.sendFile(path.join(__dirname, '../public/home.html'));
    });
  
    // GET Survey
    app.get('/survey', function(request, response) {
      response.sendFile(path.join(__dirname, '../public/survey.html'));
    });
  
    // Get CSS 
    app.get('/style.css', function(request, response) {
      response.sendFile(path.join(__dirname, '../public/style.css'));
    });
  }