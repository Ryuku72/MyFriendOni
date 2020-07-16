const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vocabSchema = new Schema({
  Row: { type: String, required: true },
  Japanese: { type: String, required: true },
  English: { type: String, required: true },
})

const vocablists = mongoose.model("vocablists", vocabSchema);

module.exports = vocablists;