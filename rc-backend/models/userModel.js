const mongoose = require("mongoose");
require("dotenv").config();

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  otp: String,
  otpExpiry: Date,
  createdAt: {
    type: Date,
    default: () => new Date().toISOString().substring(0, 10),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

/*  


// Hash password before saving to database
userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  const saltRounds = 10;
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password with hashed password in database
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;  */

/* 

username: a required string field for the user's username, which is unique and trimmed.
email: a required string field for the user's email, which is also unique and trimmed.
password: a required string field for the user's password.
createdAt: a date field for the user's creation time, with a default value of the current date and time.

*/
