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

app.use(require("./routes/html"));
app.use(require("./routes/api"));

mongoose.connect(process.env.MONGO ||'mongodb://localhost/quiz',  {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => console.log("Connected to Mongoose"))
  .on("error", (error) => {
    console.log("Your Error: ", error);
  });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});