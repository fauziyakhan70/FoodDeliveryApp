const express = require("express");
const fs = require("fs");
const app = express();
const dbConnect = require("./db");
const Category = require("./Models/category.model");
const Food = require("./Models/food.model");
const foodController = require("./Controller/food.controller");
const categoryController = require("./Controller/category.controller");
const userController=require("./Controller/user.controllers")



dbConnect()
    .then(async () => {
        console.log("Connected to MongoDB");

        async function seedData() {
            try {
                const categoryData = JSON.parse(fs.readFileSync("foodCategory.json", "utf8"));
                const foodData = JSON.parse(fs.readFileSync("foodData2.json", "utf8"));

                // Check if data already exists in the "Category" and "Food" collections
                const existingCategories = await Category.find({});
                const existingFoods = await Food.find({});

                if (existingCategories.length === 0) {
                    await Category.insertMany(categoryData);
                    console.log("Data seeded into the 'Category' collection.");
                } else {
                    console.log("Data already exists in the 'Category' collection.");
                }

                if (existingFoods.length === 0) {
                    await Food.insertMany(foodData);
                    console.log("Data seeded into the 'Food' collection.");
                } else {
                    console.log("Data already exists in the 'Food' collection.");
                }
            } catch (error) {
                console.error("Error seeding data:", error);
            }
        }
        seedData(); 
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB: ", err);
    });


app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requestes-With, Content-Type,Accept"
    );
    next();
})

app.use(express.json());

app.use("/foods", foodController);
app.use("/categories",categoryController);
app.use("/createuser",userController);

// Start the Express server
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
