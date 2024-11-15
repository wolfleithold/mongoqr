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

exports.getDrinkById = async (req, res) => {
  try {
    const { id } = req.params;

    // Increment views for the drink
    const drink = await Drink.findByIdAndUpdate(
      id,
      { $inc: { views: 1 } },
      { new: true } // Return the updated document
    );

    if (!drink) return res.status(404).json({ message: "Drink not found" });

    res.status(200).json(drink);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
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

// Update a drink (PUT - full update)
exports.updateDrink = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDrink = await Drink.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedDrink);
  } catch (error) {
    res.status(500).json({ error: "Failed to update drink" });
  }
};

// Delete a drink
exports.deleteDrink = async (req, res) => {
  try {
    const { id } = req.params;
    await Drink.findByIdAndDelete(id);
    res.status(200).json({ message: "Drink deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete drink" });
  }
};

// Patch a drink (PATCH - partial update)
exports.patchDrink = async (req, res) => {
  try {
    const { id } = req.params;
    const patchedDrink = await Drink.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(patchedDrink);
  } catch (error) {
    res.status(500).json({ error: "Failed to patch drink" });
  }
};

// server/controllers/drinkController.js
exports.getAllDrinksWithViews = async (req, res) => {
  try {
    const drinks = await Drink.find({}, "name views"); // Retrieve name and views only
    res.status(200).json(drinks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch drinks with views", error });
  }
};
