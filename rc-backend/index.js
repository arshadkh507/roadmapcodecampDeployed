const express = require("express");
const connectDB = require("./db/db");
const userRoutes = require("./routes/user");
const cors = require("cors");

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Enable CORS for all routes
const corsOptions = {
  origin: "https://roadmapcodecamp-frontend.netlify.app/",
};
app.use(cors(corsOptions));

// app.use(cors());

// Use user routes
app.use("/user", userRoutes);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

/* const serverless = require("serverless-http");
const express = require("express");
const connectDB = require("./db/db");
const userRoutes = require("./routes/user");
const cors = require("cors");

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());
// Enable CORS for all routes
const corsOptions = {
  origin: "https://testingroadmapcodecamp.netlify.app/",
};
app.use(cors(corsOptions));
// Middleware
// Use user routes
app.use("/user", userRoutes);

// Export the Express app as a serverless function
module.exports.handler = serverless(app); */
