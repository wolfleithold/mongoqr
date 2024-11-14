// controllers/qrController.js
const QRCode = require("../models/QRCode");

// @desc    Create a new QR code
exports.createQRCode = async (req, res) => {
  try {
    const { url, title } = req.body;
    const qrCode = await QRCode.create({ url, title });
    res.status(201).json(qrCode);
  } catch (error) {
    res.status(500).json({ error: "Failed to create QR code" });
  }
};

// @desc    Get all QR codes
exports.getQRCodes = async (req, res) => {
  try {
    const qrCodes = await QRCode.find();
    res.status(200).json(qrCodes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch QR codes" });
  }
};
