import { Router } from "express";
import authUser from "../middleware/auth.js";
import {
  getMyInfo,
  getMyUpdatedInfo,
  getUserProfile,
  updateMyProfile,
} from "../controllers/ProfileController.js";

const profileRoutes = Router();

profileRoutes.use(authUser);

profileRoutes.get("/me", getMyInfo);
profileRoutes.post("/myprofile", updateMyProfile);
profileRoutes.get("/updatedinfo", getMyUpdatedInfo);
profileRoutes.get("/userprofile/:id", getUserProfile);

export default profileRoutes;
