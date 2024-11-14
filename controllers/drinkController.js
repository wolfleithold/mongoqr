// controllers/drinkController.js
const Drink = require("../models/Drink");

// Create a new drink entry
exports.createDrink = async (req, res) => {
  try {
    const { name, description, imageUrl, additionalInfo } = req.body;
    const drink = await Drink.create({
      name,
      description,
      imageUrl,
      additionalInfo,
    });
    res.status(201).json(drink);
  } catch (error) {
    res.status(500).json({ error: "Failed to create drink entry" });
  }
};

// Retrieve drink information by ID
exports.getDrinkById = async (req, res) => {
  try {
    const drink = await Drink.findById(req.params.id);
    res.status(200).json(drink);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch drink" });
  }
};
