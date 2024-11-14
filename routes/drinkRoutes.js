// routes/drinkRoutes.js
const express = require("express");
const { createDrink, getDrinkById } = require("../controllers/drinkController");

const router = express.Router();

router.post("/", createDrink); // POST /api/drinks - Add a new drink
router.get("/:id", getDrinkById); // GET /api/drinks/:id - Get drink by ID

module.exports = router;
