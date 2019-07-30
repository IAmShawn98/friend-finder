// Node Packages.
const friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.send(friends);
    });

    app.post("/api/friends", function (req, res) {
        res.send(friends);
    });
}