const express = require("express");
const connectDB = require("./db/db");
const userRoutes = require("./routes/user");
const cors = require("cors");

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Enable CORS for all routes
// app.use(
//   cors({
//     origin: "https://roadmapcodecamp-frontend.netlify.app",
//     optionsSuccessStatus: 200,
//   })
// );

app.use((req, res, next) => {
  // Set 'Access-Control-Allow-Origin' header field to your
  // frontend origin using response objects set method.
  res.set(
    "Access-Control-Allow-Origin",
    "https://roadmapcodecamp-frontend.netlify.app"
  );
  // Check if the request method is OPTIONS
  if (req.method === "OPTIONS") {
    // Send a 200 status code with the appropriate CORS headers
    res.set("Access-Control-Allow-Methods", "GET,PUT,POST");
    res.set("Access-Control-Allow-Headers", "Content-Type,Authorization");
    return res.sendStatus(200);
  }
  // Proceed to the next middleware or route handler
  next();
});

// Use user routes
app.use("/user", userRoutes);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
