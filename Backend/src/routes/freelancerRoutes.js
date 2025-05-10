import { Router } from "express";
import authUser from "../middleware/auth.js";
import role from "../middleware/role.js";
import { getJobs } from "../controllers/FreelancerController.js";

const freelancerRoutes = Router();

freelancerRoutes.get("/get-jobs", authUser, getJobs);

export default freelancerRoutes;
