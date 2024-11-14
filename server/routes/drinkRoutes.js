// routes/drinkRoutes.js
const express = require("express");
const {
  createDrink,
  getDrinks,
  updateDrink,
  deleteDrink,
  patchDrink,
} = require("../controllers/drinkController"); // Correctly import the functions
const router = express.Router();

router.post("/", createDrink); // POST /api/drinks - Create a new drink
router.get("/", getDrinks); // GET /api/drinks - Get all drinks
router.put("/:id", updateDrink); // PUT /api/drinks/:id - Update a drink
router.delete("/:id", deleteDrink); // DELETE /api/drinks/:id - Delete a drink
router.patch("/:id", patchDrink); // PATCH /api/drinks/:id - Patch a drink

module.exports = router;
