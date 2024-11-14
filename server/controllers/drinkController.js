// controllers/drinkController.js
const Drink = require("../models/Drink");

// Create a new drink
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
    res.status(500).json({ error: "Failed to create drink" });
  }
};

// Get all drinks
exports.getDrinks = async (req, res) => {
  try {
    const drinks = await Drink.find();
    res.status(200).json(drinks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch drinks" });
  }
};
