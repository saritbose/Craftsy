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

clientRoutes.use(authUser, role("Client")); // using authentication for all routes and role Client for only access to clients

clientRoutes.post("/post-job", addJob); // posting jobs
clientRoutes.get("/get-jobs", getJobs); // getting all the posted jobs
clientRoutes.get("/get-job/:id", getJob); // getting specific job
clientRoutes.get("/get-applicants/:jobId", getApplicants); // getting all applicants for a specific job
clientRoutes.put("/edit-job/:id", editJob); // editing a job
clientRoutes.delete("/del-job/:jobId", deleteJob); // deleting a job
clientRoutes.put("/del-applicant/:jobId/:applicantId", deleteApplicant); // rejecting an applicant
clientRoutes.put("/accept-applicant/:jobId/:applicantId", acceptApplicant); // accepting an applicant

export default clientRoutes;
