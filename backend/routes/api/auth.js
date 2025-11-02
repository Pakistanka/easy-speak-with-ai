const express = require("express");
const router = express.Router();
const auth = require("./../../middleware/auth");
const User = require("../../models/User");

const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

// @route   GET api/auth
// @desc    Get authenticated user
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST api/auth
// @desc    Authenticate user and get token
// @access  Public
router.post(
  "/",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email: email });

      if (!user) {
        return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
      }

      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
      }

      // Return json webtoken
      const payload = {
        user: {
          id: user.id,
        },
      };

      const secret = process.env.JWT_SECRET || (config.has("jwtSecret") ? config.get("jwtSecret") : null);
      if (!secret) {
        return res.status(500).json({ msg: "JWT secret is not configured" });
      }

      jwt.sign(payload, secret, { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
