const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const qrRoutes = require("./routes/qrRoutes");
const drinkRoutes = require("./routes/drinkRoutes");
const { getDrinkById } = require("./controllers/drinkController");
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });

const app = express();

// Define allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://mongoqr-frontend.onrender.com",
];

// Use CORS middleware with dynamic origin handling
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (e.g., mobile apps, curl requests)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json()); // For parsing JSON bodies

// Mount routes
app.use("/api/qr", qrRoutes);
app.use("/api/drinks", drinkRoutes);
app.get("/api/drinks/:id", getDrinkById);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
