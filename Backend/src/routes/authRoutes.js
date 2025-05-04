import { Router } from "express";
import { loginUser, registerUser } from "../controllers/UserAuth.js";

const userRouter = Router();

userRouter.post("/login", loginUser);
userRouter.post("/register", registerUser);

export default userRouter;
