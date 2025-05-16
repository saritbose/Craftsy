import { Router } from "express";
import authUser from "../middleware/auth.js";
import role from "../middleware/role.js";
import {
  addApplicant,
  getJobs,
  getMyInfo,
} from "../controllers/FreelancerController.js";

const freelancerRoutes = Router();

freelancerRoutes.use(authUser, role("Freelancer")); // using authentication for all routes and role Freelancer for only access to freelancers

freelancerRoutes.get("/get-jobs", getJobs); // geting all jobs
freelancerRoutes.post("/apply-to-job/:jobId", addApplicant); // applying to job
freelancerRoutes.get("/me", getMyInfo); // getting freelancer info

export default freelancerRoutes;
