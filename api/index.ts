// index.ts
import express from "express";
import path from "path";

const app = express();

// Stel ejs in als template engine
app.set("view engine", "ejs");
// Set the views directory
app.set("views", path.join(__dirname, "..", "views"));

// Gebruik de map 'public' voor statische resources
app.use(express.static("public"));

// Maak een GET route voor de index
app.get("/", function (request, response) {
    response.render("index");
});


app.get("/designs", function (request, response) {
  response.render("designs");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server ready on port ${PORT}.`);
});
