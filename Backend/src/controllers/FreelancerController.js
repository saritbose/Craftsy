import Job from "../models/Job.js";

export const getJobs = async (req, res) => {
  try {
    const allJobs = await Job.find();
  } catch (error) {
    throw new Error(error);
  }
};
