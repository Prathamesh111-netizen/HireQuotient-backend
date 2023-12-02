import Post from "../models/postModel.js";
import asyncHandler from "express-async-handler";

// @desc Get all the users posts
// @route GET /api/posts
// @access PRIVATE
const getPosts = asyncHandler(async (req, res) => {
  try {
    const userId = req.user.id;
    const posts = await Post.find({
      user: userId,
    }).sort({
      createdAt: -1,
    });
    res.json(posts);
  } catch (error) {
    res.status(400);
    throw new Error("Error fetching posts");
  }
});

// @desc Get a single post
// @route GET /api/posts/:id
// @access PRIVATE
const getPostDetails = asyncHandler(async (req, res) => {
  try {
    const userId = req.user.id;
    const post = await Post.findById(req.params.id);
    if (post.user.toString() !== userId) {
      res.status(401);
      throw new Error("Not authorized to access this post");
    }
    res.json(post);
  } catch (error) {
    res.status(400);
    throw new Error("Error fetching post");
  }
});

// @desc Create a new post
// @route POST /api/posts
// @access PRIVATE
const createPost = asyncHandler(async (req, res) => {
  try {
    const { title, content } = req.body;
    let isPublic = false;
    if ("isPublic" in req.body) {
      isPublic = req.body.public;
    }
    const userId = req.user.id;
    const post = await Post.create({
      title,
      content,
      user: userId,
      isPublic,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(400);
    throw new Error("Error creating post");
  }
});

// @desc Update a post
// @route PUT /api/posts/:id
// @access PRIVATE
const updatePost = asyncHandler(async (req, res) => {
  try {
    const { title, content } = req.body;
    let isPublic = false;
    if ("isPublic" in req.body) {
      isPublic = req.body.public;
    }
    const userId = req.user.id;
    const post = await Post.findById(req.params.id);
    if (post.user.toString() !== userId) {
      res.status(401);
      throw new Error("Not authorized to update this post");
    }
    post.title = title;
    post.content = content;
    post.isPublic = isPublic;
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(400);
    throw new Error("Error updating post");
  }
});

// @desc Delete a post
// @route DELETE /api/posts/:id
// @access PRIVATE
const deletePost = asyncHandler(async (req, res) => {
  try {
    const userId = req.user.id;
    const post = await Post.findById(req.params.id);
    if (post.user.toString() !== userId) {
      res.status(401);
      throw new Error("Not authorized to delete this post");
    }
    Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post removed" });
  } catch (error) {
    res.status(400);
    throw new Error("Error deleting post" + error);
  }
});

// @desc Get all public posts
// @route GET /api/posts/public
// @access PUBLIC
const getPublicPosts = asyncHandler(async (req, res) => {
  try {
    const posts = await Post.find({ isPublic: true }).sort({
      createdAt: -1,
    });
    res.json(posts);
  } catch (error) {
    res.status(400);
    throw new Error("Error fetching posts");
  }
});

export {
  getPosts,
  getPostDetails,
  createPost,
  updatePost,
  deletePost,
  getPublicPosts,
};
