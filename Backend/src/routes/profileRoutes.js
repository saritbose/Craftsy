import { Router } from "express";
import authUser from "../middleware/auth.js";
import {
  getUserProfile,
  profileInfo,
  updateProfile,
  updateProfileColor,
  userInfo,
} from "../controllers/ProfileController.js";

const profileRoutes = Router();

profileRoutes.use(authUser); // using authentication for all routes

profileRoutes.get("/userinfo", userInfo); // get user details
profileRoutes.get("/profileinfo", profileInfo); // get profile details
profileRoutes.post("/updateprofile", updateProfile); // create/update profile
profileRoutes.get("/userprofile/:id", getUserProfile); // client seeing applicants profile
profileRoutes.post("/updateprofilecolor", updateProfileColor); // giving users a random profile color

export default profileRoutes;
