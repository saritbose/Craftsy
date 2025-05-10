import Job from "../models/Job.js";

export const getJobs = async (req, res) => {
  try {
    const allJobs = await Job.find();
    res.json(allJobs);
    console.log(allJobs);
  } catch (error) {
    throw new Error(error);
  }
};
