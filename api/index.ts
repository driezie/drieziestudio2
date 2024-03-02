// index.ts
import express from "express";
import path from "path";

const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set views directory
app.set("views", path.join(__dirname, "views"));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Define routes
app.get("/", (req, res) => {
  // Render the index.ejs template
  res.render("index");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server ready on port ${PORT}.`);
});
