const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../Models/user.model");
const bcrypt = require("bcrypt");
// "bcrypt": "^5.1.1",
    // "bcryptjs": "^2.4.3",
    
// POST route for user registration
router.post(
  "/register",
  [
    // Validation middleware
    body("username").not().isEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res) => {
    try {
      // Validation 
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

    
      const { username, email, password } = req.body;

      
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User with this email already exists" });
      }

      // Hash 
      const hashedPassword = await bcrypt.hash(password, 10); 

     
      const newUser = new User({
        username,
        email,
        password: hashedPassword, 
      });

      
      await newUser.save();

      res.json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ error: "Error registering user" });
    }
  }
);

const jwt = require("jsonwebtoken");
const secretKey = "your-secret-key"; // Replace with your secret key

router.post(
  "/login",
  [
    // Validation 
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ error: "User not found. Please register." });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        // Successful login
        const token = jwt.sign({ userId: user._id,username: user.username, email: user.email }, secretKey, {
          expiresIn: "1h" // You can customize the expiration time
        });
        res.json({ token: token });
      } else {
        // Incorrect password
        res.status(401).json({ error: "Incorrect password" });
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Error during login" });
    }
  }
);


module.exports = router;
