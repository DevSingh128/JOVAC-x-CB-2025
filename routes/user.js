// routes/user.js
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const router = express.Router();

// GET: Signup page
router.get("/signup", (req, res) => {
  res.render("signup");
});

// POST: Signup handler
router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.send("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    fullName,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign({ _id: newUser._id }, "secret");

  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // Set to true if using HTTPS
  });

  res.redirect("/");
});

// GET: Signin page
router.get("/signin", (req, res) => {
  res.render("signin");
});

// POST: Signin handler
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return res.send("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, existingUser.password);

  if (!isMatch) {
    return res.send("Invalid email or password");
  }

  const token = jwt.sign({ _id: existingUser._id }, "secret");

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
  });

  res.redirect("/");
});

// GET: Logout
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

module.exports = router;
