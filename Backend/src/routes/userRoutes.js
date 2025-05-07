import { Router } from "express";
import { loginUser, registerUser } from "../controllers/UserAuthController.js";

const userRoutes = Router();

userRoutes.post("/login", loginUser);
userRoutes.post("/register", registerUser);

export default userRoutes;
