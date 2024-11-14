// models/QRCode.js
const mongoose = require("mongoose");

const QRCodeSchema = new mongoose.Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("QRCode", QRCodeSchema);
