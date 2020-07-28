const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    jpnHighScore: { type: Number, required: true, default: 0 },
    engHighScore: { type: Number, required: true, default: 0 },
    hiraHighScore: { type: Number, required: true, default: 0 },
    kataHighScore: { type: Number, required: true, default: 0 },
    totalScore: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

userSchema.pre("save", async function save(next) {
  const user = this;
  if (!user.isModified("password")) {
      return next();
  }
  await bcrypt
        .genSalt(10)
        .then((salt) => {
            return bcrypt.hash(user.password, salt);
        })
        .then((hash) => {
            user.password = hash;
            next();
        })
        .catch((err) => {
            return next(err);
        });
});

userSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      cb(err, isMatch);
  });
};

const users = mongoose.model("users", userSchema);

module.exports = users;
