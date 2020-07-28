// NPM Packages
const dotenv = require("dotenv")
const express = require("express");
const session = require("express-session")
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();

//Config files
const connectDb = require("./config/database");
const MongoStore = require("connect-mongo")(session);
dotenv.config({ path: ".env" });

// Port
const PORT = process.env.PORT || 3001;

//Mongoose connect
connectDb();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET || "AccessSecret"));

// Heroku static connection
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Session 
app.use(
  session({
      resave: true,
      saveUninitialized: true,
      secret: process.env.SESSION_SECRET || "AccessSecret",
      cookie: {
          secure: false, // not using https
          maxAge: 1209600000,
      }, // two weeks in milliseconds
      store: new MongoStore({
          url: process.env.MONGO || "mongodb://localhost/quiz",
          autoReconnect: true,
      }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(require("./routes"));


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});