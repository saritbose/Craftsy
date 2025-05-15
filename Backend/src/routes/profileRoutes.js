import { Router } from "express";
import authUser from "../middleware/auth.js";
import {
  getUserProfile,
  profileInfo,
  updateProfile,
  userInfo,
} from "../controllers/ProfileController.js";

const profileRoutes = Router();

profileRoutes.use(authUser);

profileRoutes.get("/userinfo", userInfo); // get user details
profileRoutes.get("/profileinfo", profileInfo); // get profile details
profileRoutes.post("/updateprofile", updateProfile); // create/update profile
profileRoutes.get("/userprofile/:id", getUserProfile); // client seeing applicants profile

export default profileRoutes;
