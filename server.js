// Node Packages.
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Define new express app instance.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be 
// set by Heroku.
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes")(app);

// Start Server.
app.listen(PORT, function () {
    // Let's us know the server is running in the console.
    console.log("Server listening on: http://localhost:" + PORT);
});
