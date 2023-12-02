import express from "express";
import {
  authUser,
  getUserProfile,
  getAccessToken,
  registerUser,
  updateUserProfile,
  //   getUserData,
//   confirmUser,
//   mailForEmailVerification,
//   mailForPasswordReset,
//   resetUserPassword,
//   getAllUsers,
//   deleteUser,
//   getUserById,
//   updateUser,
} from "../controllers/userControllers.js";

import { protectRoute, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser)
                    // .get(protectRoute, isAdmin, getAllUsers);

router.route("/login").post(authUser);


router.route("/refresh").post(getAccessToken);

router
.route("/profile")
.get(protectRoute, getUserProfile)
.put(protectRoute, updateUserProfile);

// router.route("/confirm/:token").get(confirmUser);

// router.route("/confirm").post(mailForEmailVerification);

// router.route("/reset").post(mailForPasswordReset).put(resetUserPassword);

// router.route("/passport/data").post(getUserData);

// router
//   .route("/:id")
//   .delete(protectRoute, isAdmin, deleteUser)
//   .get(protectRoute, isAdmin, getUserById)
//   .put(protectRoute, isAdmin, updateUser);

export default router;
