const router = require("express").Router();
const UserPost = require("../models/UserPost");
// const User = require("../models/User");

// create post
router.post("/posting", async (req, res) => {
  try {
    const newPost = await new UserPost(req.body);
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (e) {
    res.status(500).json(e);
  }
});

// get all posts from all uses

module.exports = router;
