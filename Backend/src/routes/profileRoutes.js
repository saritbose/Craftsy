import { Router } from "express";
import authUser from "../middleware/auth.js";
import {
  getMyInfo,
  getMyUpdatedInfo,
  getUserProfile,
  updateMyProfile,
} from "../controllers/ProfileController.js";

const profileRoutes = Router();

profileRoutes.get("/me", authUser, getMyInfo);
profileRoutes.post("/myprofile", authUser, updateMyProfile);
profileRoutes.get("/updatedinfo", authUser, getMyUpdatedInfo);
profileRoutes.get("/userprofile/:id", authUser, getUserProfile);

export default profileRoutes;
