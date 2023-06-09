const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Additional code to check the connection status
    const connection = mongoose.connection;
    console.log("Connection state:", connection.readyState);
    // connection.readyState will be 1 if connected successfully

    // Add your application logic here
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
