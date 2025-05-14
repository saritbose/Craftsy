import { Router } from "express";
import authUser from "../middleware/auth.js";
import role from "../middleware/role.js";
import {
  addApplicant,
  getJobs,
  getMyInfo,
} from "../controllers/FreelancerController.js";

const freelancerRoutes = Router();

freelancerRoutes.get("/get-jobs", authUser, getJobs);
freelancerRoutes.post("/apply-to-job/:jobId", authUser, addApplicant);
freelancerRoutes.get("/me", authUser, getMyInfo);

export default freelancerRoutes;
