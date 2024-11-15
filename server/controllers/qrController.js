// server/controllers/qrController.js
const QrCoder = require("../models/QrCoder");
const QRCode = require("qrcode");

// Function to create and store a new QR code for a specific drink
exports.createQRCode = async (req, res) => {
  const { drinkId } = req.params;
  const qrUrl = `${process.env.FRONTEND_URL}/drinks/${drinkId}`; // URL to encode

  try {
    // Generate the QR code in Base64 format
    const qrCodeData = await QRCode.toDataURL(qrUrl);

    // Save to the database
    const newQrCode = new QrCoder({ drinkId, qrCodeData });
    await newQrCode.save();

    res.status(201).json({ message: "QR Code generated", qrCodeData });
  } catch (error) {
    res.status(500).json({ message: "Error generating QR code", error });
  }
};

// Function to get all QR codes (optional, for testing or admin purposes)
exports.getQRCodes = async (req, res) => {
  try {
    const qrCodes = await QrCoder.find();
    res.status(200).json(qrCodes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch QR codes", error });
  }
};

exports.deleteQRCodeById = async (req, res) => {
  const { id } = req.params; // Get the unique QR code ID

  try {
    const deletedQrCode = await QrCoder.findByIdAndDelete(id); // Delete by unique ID

    if (!deletedQrCode) {
      return res.status(404).json({ message: "QR Code not found" });
    }

    res.status(200).json({ message: "QR Code deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting QR code", error });
  }
};
