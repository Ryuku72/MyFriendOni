const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vocabSchema = new Schema({
  row: { type: Number },
  japanese: { type: String },
  english: { type: String},
})

const Vocablist = mongoose.model("Vocablist", vocabSchema);

module.exports = Vocablist;