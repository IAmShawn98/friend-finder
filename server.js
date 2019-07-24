// Node Packages.
const express = require("express");
const path = require("path");

// Define new express app instance.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be 
// set by Heroku.
const PORT = process.env.PORT || 8080;

app.use(express.static("app/public"));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes")(app);

// Start Server.
app.listen(PORT, function () {
    // Let's us know the server is running in the console.
    console.log("Server listening on: http://localhost:" + PORT);
});
