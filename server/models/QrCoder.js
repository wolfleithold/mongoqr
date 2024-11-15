// server/models/QrCoder.js
const mongoose = require("mongoose");

const qrCodeSchema = new mongoose.Schema({
  drinkId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Drink",
    required: true,
  },
  qrCodeData: { type: String, required: true }, // Base64 string or URL for the QR code
});

// Export the model as "QrCoder" to reflect the new name
module.exports = mongoose.model("QrCoder", qrCodeSchema, "qrcodes");
