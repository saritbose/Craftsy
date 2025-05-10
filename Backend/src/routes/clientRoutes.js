import { Router } from "express";
import authUser from "../middleware/auth.js";
import role from "../middleware/role.js";
import { addJob } from "../controllers/ClientController.js";

const clientRoutes = Router();

clientRoutes.post("/post-job", authUser, addJob);

export default clientRoutes;
