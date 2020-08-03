const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionSchema = new Schema(
    {
        user_id: { type: String, required: true },
        score: { type: Number },
        correct: { type: Array, default: [] },
        incorrect: { type: Array, default: [] },
  },
  {
    timestamps: true,
}
);

const sessions = mongoose.model("sessions", sessionSchema);

module.exports = sessions;