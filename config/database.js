const mongoose = require("mongoose");

function connectDb() {
  mongoose.connect(process.env.MONGO || "mongodb://localhost/quiz", 
    {
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
    }
);

  mongoose.connection
    .once("open", () => console.log("Connected to Mongoose"))
    .on("error", (error) => {
      console.log("Your Error: ", error);
    });
}

module.exports = connectDb;
