const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const gravatar = require("gravatar");
const { check, validationResult } = require("express-validator");

// User Model
const User = require("../../models/User");

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a password of at least 6 characters").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email: email });

      if (user) {
        return res.status(400).json({ errors: [{ msg: "User already exists" }] });
      }

      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: "200", // size
        r: "pg", // no mature content
        d: "mm", // default image if user doesn't have a gravatar
      });

      user = new User({
        email,
        name,
        avatar,
        password,
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

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
