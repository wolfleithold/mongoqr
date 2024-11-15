const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const drinkRoutes = require("./routes/drinkRoutes");
const cors = require("cors");
const qrRoutes = require("./routes/qrRoutes");

dotenv.config({ path: "./config/config.env" });

const app = express();

// Use CORS middleware with dynamic origin handling
app.use(cors());

app.use(express.json()); // For parsing JSON bodies

// Mount routes
app.use("/api/drinks", drinkRoutes);
app.use("/api/qr", qrRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
