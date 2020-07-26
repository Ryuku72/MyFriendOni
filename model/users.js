const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    password: { type: String, required: true },
    jpnHighScore: { type: Number, required: true, default: 0 },
    engHighScore: { type: Number, required: true, default: 0 },
    hiraHighScore: { type: Number, required: true, default: 0 },
    kataHighScore: { type: Number, required: true, default: 0 },
    totalScore: { type: Number, required: true, default: 0 },
  }, {timestamps: true})
  
  const users = mongoose.model("users", userSchema);
  
  module.exports = users;