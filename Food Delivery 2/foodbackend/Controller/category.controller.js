const express = require("express");
const router = express.Router();
const Category = require("../Models/category.model");

router.get("/", async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving categories" });
    }
});

router.post("/", async (req, res) => {
    const { CategoryName } = req.body;

    try {
        if (!CategoryName) {
            return res.status(400).json({ error: "CategoryName is required" });
        }

        // Check if the category already exists
        const existingCategory = await Category.findOne({ CategoryName });
        if (existingCategory) {
            return res.status(400).json({ error: "Category already exists" });
        }

        const newCategory = new Category({
            CategoryName,
        });

        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: "Error creating a new category" });
    }
});

router.put("/:categoryId", async (req, res) => {
    const categoryId = req.params.categoryId;
    const { CategoryName } = req.body;

    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            categoryId,
            { CategoryName },
            { new: true } 
        );

        if (!updatedCategory) {
            return res.status(404).json({ error: "Category not found" });
        }

        res.json(updatedCategory);
    } catch (error) {
        res.status(500).json({ error: "Error updating category" });
    }
});

router.delete("/:categoryId", async (req, res) => {
    const categoryId = req.params.categoryId;

    try {
        const deletedCategory = await Category.findByIdAndDelete(categoryId);

        if (!deletedCategory) {
            return res.status(404).json({ error: "Category not found" });
        }

        res.json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting category" });
    }
});

module.exports = router;