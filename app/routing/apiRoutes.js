// Require our 'friends' JSON data.
const friendsData = require("../data/friends.js");

// Grab our Express instance functionality.
module.exports = function (app) {
    // Get our friends data from 'friends.js' and render as JSON.
    app.get("/api/friends", function (req, res) {
        res.send(friendsData);
    });

    // Form Post Request.
    app.post("/api/friends", function (req, res) {
        // Store the users survey values.
        let userScoreData = req.body.scores;
        // Store Answers Into Array.
        const scoreAry = [];
        // Store the users 'best match' score.
        let bestMatch = 0;

        // Find the absolute difference between the users total score and the JSON scores.

        // Loop through the 'friendsData' to get every score.
        for (var i = 0; i < friendsData.length; i++) {
            var scoreDiff = 0;

            // Find the absolute difference between the user 'userScoreData' and the 'friends.js' JSON data.
            for (var j = 0; j < userScoreData.length; j++) {
                // Using the Math 'abs' aka 'ABSOLUTE' JavaScript method, we can find the absolute difference
                // Between the users survey score and the required data from our 'friends.js' JSON 
                // score data.
                scoreDiff += (Math.abs(parseInt(friendsData[i].scores[j] - parseInt(userScoreData[j]))));
            }

            // Push diff data into our 'scoreAry'.
            scoreAry.push(scoreDiff);

            // Populate 'bestMatch' with our newly pushed score difference.
            for (var k = 0; k < scoreAry.length; k++) {
                // If the 'scoreAry' is less than or equal to the populated 'bestMatch'....
                if (scoreAry[i] <= scoreAry[bestMatch]) {
                    // Determine best match from 'k' array!
                    bestMatch = k;
                }

                // Return the 'best match' data.
                let bestFriend = friendsData[bestMatch];
                res.json(bestFriend);

                // Log Results && Push Data to 'Body'.
                console.log(req.body);
                friendsData.push(req.body);
            }
        }

    });

    // Empty Out Array Data Once Survey POST Completes.
    app.post("/api/friends", (req, res) => {
        friendsData.length = [];
        res.json({
            ok: true
        });
    });
}