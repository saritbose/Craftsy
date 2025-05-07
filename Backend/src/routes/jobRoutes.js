import { Router } from "express";
import { addJob } from "../controllers/JobsController.js";
import authUser from "../middleware/auth.js";

const jobRoutes = Router();

jobRoutes.post("/post-job", authUser, addJob);

export default jobRoutes;
