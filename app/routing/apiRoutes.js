var friends = require("../data/friends");
// ROUTING
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);

    // Receive user input (name, photo, scores)
    var newUserScores = req.body.scores;

    var bestMatchIndex = 0;
    var allScores = [];

    // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
    //  whatever the difference is, add to the total difference
    for (var i = 0; i < friends.length - 1; i++) {
      var totalDifference = 0;
      for (var j = 0; j < friends[i].scores.length; j++) {
        totalDifference += Math.abs(
          parseInt(newUserScores[j]) - parseInt(friends[i].scores[j])
        );
      }
      allScores.push(totalDifference);
      console.log("The total difference is " + totalDifference);
    }
    //after all friends are compared, find best match
    for (var i = 0; i < allScores.length; i++) {
      if (allScores[i] <= allScores[bestMatchIndex]) {
        bestMatchIndex = i;
        console.log("The object index for best match is " + bestMatchIndex);
      }
    }
    // after finding match, add user to friends array
    friends.push(req.body);

    // send back to browser the best friend match
    res.json(friends[bestMatchIndex]);
  });
};
