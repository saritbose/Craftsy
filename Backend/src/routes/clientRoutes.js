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
  getJobs,
} from "../controllers/ClientController.js";

const clientRoutes = Router();

clientRoutes.post("/post-job", authUser, addJob);
clientRoutes.get("/get-jobs", authUser, getJobs);
clientRoutes.get("/get-applicants/:jobId", authUser, getApplicants);
clientRoutes.put("/edit-job", authUser, editJob);
clientRoutes.delete("/del-job/:jobId", authUser, deleteJob);
clientRoutes.delete(
  "/del-applicant/:jobId/:applicantId",
  authUser,
  deleteApplicant
);
clientRoutes.put(
  "/accept-applicant/:jobId/:applicantId",
  authUser,
  acceptApplicant
);

export default clientRoutes;
