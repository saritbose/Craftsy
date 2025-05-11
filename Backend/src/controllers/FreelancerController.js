import Job from "../models/Job.js";

export const getJobs = async (req, res) => {
  try {
    const allJobs = await Job.find();
  } catch (error) {
    throw new Error(error);
  }
};

export const addApplicant = async (req, res) => {
  const jobId = req.params.jobId;
  const applicantId = req.user?._id;

  try {
    const job = await Job.findById(jobId);
    if (!job) {
      return res.json({ success: false, message: "Job dont exist." });
    }
    if (job.applicants.includes(applicantId)) {
      return res.json({ success: false, message: "Already applied." });
    }
    job.applicants.push(applicantId);
    await job.save();
    return res.json({ success: true, message: "Applied successfully." });
  } catch (error) {
    throw new Error(error);
  }
};
