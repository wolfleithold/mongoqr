// routes/qrRoutes.js
const express = require("express");
const { createQRCode, getQRCodes } = require("../controllers/qrController");

const router = express.Router();

router.post("/", createQRCode); // POST /api/qr - Create a QR code
router.get("/", getQRCodes); // GET /api/qr - Get all QR codes

module.exports = router;
