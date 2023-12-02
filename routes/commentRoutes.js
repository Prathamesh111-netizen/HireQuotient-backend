import express from "express";
import {
    getComments, createComment
} from "../controllers/commentControllers.js";

import { protectRoute, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/:postid").get(protectRoute, getComments)

router.route("/").post(protectRoute, createComment);


export default router;
