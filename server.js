// Node Packages.
const express = require("express");
const path = require("path");

// Define new express app instance.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;





// Start Server.
app.listen(PORT, function () {
    // Let's us know the server is running in the console.
    console.log("Server listening on: http://localhost:" + PORT);
});
