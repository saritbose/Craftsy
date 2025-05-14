import { Router } from "express";
import { loginUser, registerUser } from "../controllers/UserAuthController.js";
import authUser from "../middleware/auth.js";
import User from "../models/User.js";

const userRoutes = Router();

userRoutes.post("/login", loginUser);
userRoutes.post("/register", registerUser);

export default userRoutes;
