// Pull in data
var profilesData = require('../data/profiles');

// make function available outside of this file
module.exports = function(app) {

  // Get profiles data
  app.get("/api/profiles", function(request, response) {
    // Respond with JSON data
    response.json(profilesData);
  });

  // POST route //
  app.post('/api/profiles', function(request, response) {
      profilesData.push(request.body);
      response.json(true);
  });

}