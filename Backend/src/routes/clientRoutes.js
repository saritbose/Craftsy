import { Router } from "express";
import authUser from "../middleware/auth.js";
import role from "../middleware/role.js";
import {
  acceptApplicant,
  addJob,
  deleteApplicant,
  deleteJob,
  editJob,
  getApplicants,
  getJob,
  getJobs,
} from "../controllers/ClientController.js";

const clientRoutes = Router();

clientRoutes.use(authUser, role("Client"));

clientRoutes.post("/post-job", addJob);
clientRoutes.get("/get-jobs", getJobs);
clientRoutes.get("/get-job/:id", getJob);
clientRoutes.get("/get-applicants/:jobId", getApplicants);
clientRoutes.put("/edit-job/:id", editJob);
clientRoutes.delete("/del-job/:jobId", deleteJob);
clientRoutes.put("/del-applicant/:jobId/:applicantId", deleteApplicant);
clientRoutes.put("/accept-applicant/:jobId/:applicantId", acceptApplicant);

export default clientRoutes;
