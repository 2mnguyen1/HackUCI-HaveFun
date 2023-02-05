const express = require("express");
const router = express.Router();
const MemePost = require("../models/MemePost");

// create meme
router.post("/creating", async (req, res) => {
  try {
    const newMeme = await new MemePost(req.body);
    const saved = await newMeme.save();
    res.status(200).json(saved);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

// like a meme
router.put("/liking/:id", async (req, res) => {
  const post = await MemePost.findById(req.params.id);
  await post.like++;
  const save = post.save();
  res.status(200).json(save);
});

// get all meme
router.get("/getMemes", async (req, res) => {
  try {
    const allMemes = await MemePost.find({});
    res.status(200).json(allMemes);
  } catch (e) {
    res.status(500).json(allMemes);
  }
});

module.exports = router;
