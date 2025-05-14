import { Router } from "express";
import authUser from "../middleware/auth.js";
import role from "../middleware/role.js";
import {
  addApplicant,
  getJobs,
  getMyInfo,
} from "../controllers/FreelancerController.js";

const freelancerRoutes = Router();

freelancerRoutes.use(authUser, role("Freelancer"));

freelancerRoutes.get("/get-jobs", getJobs);
freelancerRoutes.post("/apply-to-job/:jobId", addApplicant);
freelancerRoutes.get("/me", getMyInfo);

export default freelancerRoutes;
