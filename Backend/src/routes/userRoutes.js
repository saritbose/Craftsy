import { Router } from "express";
import { loginUser, registerUser } from "../controllers/UserAuthController.js";

const userRoutes = Router();

userRoutes.post("/login", loginUser); // user login
userRoutes.post("/register", registerUser); // user registering

export default userRoutes;
