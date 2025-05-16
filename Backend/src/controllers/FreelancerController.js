import Job from "../models/Job.js";
import User from "../models/User.js";

// Getting all jobs

export const getJobs = async (req, res) => {
  try {
    const allJobs = await Job.find();
    return res.status(200).json(allJobs);
  } catch (error) {
    return res
      .status(404)
      .json({ success: false, message: "No jobs available" });
  }
};

// Finding a user

export const getMyInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ success: false, message: "User not found" });
  }
};

// Applying to a job

export const addApplicant = async (req, res) => {
  const jobId = req.params.jobId;
  const applicantId = req.user?._id;
  try {
    // searching for the job
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    if (
      job.applicants.includes(applicantId) ||
      job.selected.includes(applicantId) ||
      job.rejected.includes(applicantId)
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Already applied." });
    }
    job.applicants.push(applicantId); // applying
    await job.save(); // application done
    return res
      .status(201)
      .json({ success: true, message: "Applied successfully." });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Not applied" });
  }
};
