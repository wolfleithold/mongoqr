// routes/drinkRoutes.js
const express = require("express");
const { createDrink, getDrinks } = require("../controllers/drinkController"); // Correctly import the functions
const router = express.Router();

router.post("/", createDrink); // POST /api/drinks - Create a new drink
router.get("/", getDrinks); // GET /api/drinks - Get all drinks

module.exports = router;
