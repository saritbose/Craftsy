import { Router } from "express";
import authUser from "../middleware/auth.js";
import role from "../middleware/role.js";
import {
  addJob,
  deleteJob,
  editJob,
  getJobs,
} from "../controllers/ClientController.js";

const clientRoutes = Router();

clientRoutes.post("/post-job", authUser, addJob);
clientRoutes.get("/get-jobs", authUser, getJobs);
clientRoutes.put("/edit-job", authUser, editJob);
clientRoutes.delete("/del-job/:jobId", authUser, deleteJob);

export default clientRoutes;
