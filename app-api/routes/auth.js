const express = require("express");
const router = express.Router();
const User = require("../models/User");
const UserPost = require("../models/UserPost");
const jwt = require("jsonwebtoken");

// register
router.post("/register", async (req, res) => {
  try {
    const newUser = await new User({
      username: req.body.username,
      password: req.body.password,
      profilePicture: req.body.profilePicture,
    });
    const user = await newUser.save();  
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});
//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    if (!user) {
      return res.status(404).json("user not found");
    } else {
      if (req.body.password !== user.password)
        return res.status(404).json("invalid password");
    }

    const token = jwt.sign({ id: user._id }, "secretKey");

    res.cookie("access_token", token).status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
