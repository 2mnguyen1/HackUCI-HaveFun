const express = require("express");
const router = express.Router();
const UserPost = require("../models/UserPost");

// create post

router.post("/posting", async (req, res) => {
  try {
    const newPost = await new UserPost(req.body);
    const saved = await newPost.save();
    res.status(200).json(saved);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
