import { Router } from "express";
import { addJob } from "../controllers/JobsController.js";
import authUser from "../middleware/auth.js";
import role from "../middleware/role.js";

const jobRoutes = Router();

jobRoutes.post("/post-job", authUser, role("Client"), addJob);

export default jobRoutes;
