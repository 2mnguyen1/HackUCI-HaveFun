const express = require("express");
const router = express.Router();
const UserPost = require("../models/UserPost");
const User = require("../models/User");
const Todo = require("../models/Todo");

//create Todo
router.post("/todo/post", async (req, res) => {
  try {
    const newTodo = await new Todo(req.body);
    const saved = await newTodo.save();
    res.status(200).json(saved);
  } catch (e) {
    res.status(500).json(e);
  }
});

//get all Todo
router.get("/todo/all", async (req, res) => {
  try {
    const allTodo = await Todo.find({});
    res.status(200).json(allTodo);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

//get all Todo
router.get("/todo/:userId/all", async (req, res) => {
  try {
    const allTodo = await Todo.find({ userId: req.params.userId });
    res.status(200).json(allTodo);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

router.get("/todo/:userId/:id", async (req, res) => {
  try {
    const allTodo = await Todo.findByIdAndUpdate(req.params.id, {
      isDone: true,
    });
    res.status(200).json(allTodo);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

router.post("/todo/:userId/:id", async (req, res) => {
  try {
    const allTodo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json(allTodo);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

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

// get all posts

router.get("/timeline", async (req, res) => {
  try {
    const allPosts = await UserPost.find({});
    res.status(200).json(allPosts);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

router.delete("/timeline", async (req, res) => {
  try {
    const allPosts = await UserPost.deleteMany({});
    res.status(200).json(allPosts);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

// like
router.put("/:id/like", async (req, res) => {
  try {
    const post = await UserPost.findById(req.params.id);
    await post.like++;
    const saved = post.save();
    res.status(200).json(saved);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post("/:id/comments", async (req, res) => {
  const { newcomments } = req.body;
  const { id } = req.params;
  const item = await UserPost.findById(id);
  if (newcomments) {
    item.comments?.push(newcomments);
  }
  const updatedItem = await UserPost.findByIdAndUpdate(id, {
    comments: item.comments,
  });
  res.send(updatedItem);
});

// get a user all posts

router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const allPosts = await UserPost.find({ userId: user._id });
    res.status(200).json(allPosts);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post("/profilePic/:userId", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, {
      profilePicture: req.body.profilePicture,
    });
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json(e);
  }
});

// get username from a post
router.get("/username/:userId", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId });
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/userss", async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
