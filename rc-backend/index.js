const express = require("express");
const connectDB = require("./db/db");
const userRoutes = require("./routes/user");
const cors = require("cors");

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Enable CORS for all routes
app.use(
  cors({
    origin: "https://roadmapcodecamp-frontend.netlify.app",
    optionsSuccessStatus: 200,
  })
);

// Use user routes
app.use("/user", userRoutes);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
