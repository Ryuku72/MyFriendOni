// NPM Packages
const express = require("express");
const app = express();
const mongoose = require('mongoose');

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
const routes = require("./routes");
app.use(routes);

mongoose.connect(process.env.MONGO || 'mongodb://localhost/quiz');
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});