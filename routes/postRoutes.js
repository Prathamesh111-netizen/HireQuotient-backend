import express from "express";
import {
  getPosts,
  getPostDetails,
  createPost,
  updatePost,
  deletePost,
  getPublicPosts,
} from "../controllers/postControllers.js";

import { protectRoute, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protectRoute, getPosts).post(protectRoute, createPost);

router.route("/public").get(getPublicPosts);

router
  .route("/:id")
  .get(protectRoute, getPostDetails)
  .put(protectRoute, updatePost)
  .delete(protectRoute, deletePost);


export default router;
