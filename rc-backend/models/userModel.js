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
