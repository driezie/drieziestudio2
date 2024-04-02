const express = require('express');
const serverless = require('serverless-http');
const app = express();
const path = require('path');

app.use(express.static('public'))

// Set ejs as the template engine
app.set("view engine", "ejs");
// Set the views directory
app.set("views", path.join(__dirname, "views"));


// Serve the index.ejs file for the root path
app.get("/", function (request, response) {
    response.render("index");
});


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

module.exports.handler = serverless(app);