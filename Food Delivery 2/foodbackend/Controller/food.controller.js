const express = require("express");
const router = express.Router();
const Food = require("../Models/food.model");

router.get("/", async (req, res) => {
    try {
        const foods = await Food.find();
        res.json(foods);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving food items" });
    }
});

module.exports = router;