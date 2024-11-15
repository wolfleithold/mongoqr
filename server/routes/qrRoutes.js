// server/routes/qrRoutes.js
const express = require("express");
const {
  createQRCode,
  getQRCodes,
  deleteQRCodeById,
} = require("../controllers/qrController"); // Update function name to deleteQRCodeById
const router = express.Router();

router.post("/generate/:drinkId", createQRCode);
router.get("/", getQRCodes);
router.delete("/delete/:id", deleteQRCodeById); // Use /delete/:id to delete by unique QR code ID

module.exports = router;
