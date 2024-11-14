// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const qrRoutes = require("./routes/qrRoutes");
const drinkRoutes = require("./routes/drinkRoutes");
const { getDrinkById } = require("./controllers/drinkController");
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(
  cors({
    origin: "https://mongoqr-frontend.onrender.com", // Set to your frontend URL
  })
);

app.use(express.json()); // For parsing JSON bodies

app.use("/api/qr", qrRoutes); // Mount routes
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
