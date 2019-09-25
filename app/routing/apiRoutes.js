// Grabbing the API from friends
var getFriends = require("../data/friends");

// Routes for GETing requests when a user lands on the page
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(getFriends);
  });
};

/*

NEED to create a post route to collect data from the form, compare it and give it back as a modal 
to the user

*/
