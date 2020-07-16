const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const letterSchema = new Schema({
  Hiragana: { type: String, required: true },
  Katakana: { type: String, required: true },
  Romaji: { type: String, required: true },
})

const letters = mongoose.model("letters", letterSchema);

module.exports = letters;