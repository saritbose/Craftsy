import { Router } from "express";
import { loginUser, registerUser } from "../controllers/UserAuthController.js";
import authUser from "../middleware/auth.js";
import User from "../models/User.js";

const userRoutes = Router();

userRoutes.post("/login", loginUser);
userRoutes.post("/register", registerUser);
userRoutes.get("/profile/me", authUser, async (req, res) => {
  const user = await User.findById(req.user._id).select("name email role");
  res.json(user);
});

export default userRoutes;
