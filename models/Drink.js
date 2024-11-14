// models/Drink.js
const mongoose = require("mongoose");

const DrinkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  additionalInfo: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Drink", DrinkSchema);
