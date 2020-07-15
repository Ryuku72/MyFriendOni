// NPM Packages
const express = require("express");
const app = express();

// Port
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Heroku static connection
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes app.use(require("./routes"));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});