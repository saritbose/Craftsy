import Job from "../models/Job.js";

export const addJob = async (req, res) => {
  const { title, description, structure, budget, level, skills, location } =
    req.body;
  const clientId = req.user._id;

  try {
    const newJob = new Job({
      client: clientId,
      title: title,
      description: description,
      pricing: {
        structure: structure,
        budget: budget,
      },
      experience: level,
      skills: skills,
      location: location,
    });
    await newJob.save();

    return res.json({ success: true, message: "Job successfully added." });
  } catch (error) {
    return res.json({ success: false, message: "Job not added." });
  }
};

export const getJobs = async (req, res) => {
  try {
    const allJobs = await Job.find();
    res.json(allJobs);
  } catch (error) {
    throw new Error(error);
  }
};

export const getApplicants = async (req, res) => {
  const jobId = req.params.jobId;
  try {
    const job = await Job.findById(jobId).populate("applicants");
    if (!job) {
      return res.json({ message: "Job not found" });
    }
    if (job.applicants.length === 0) {
      return res.json({ message: "No applicants found" });
    }
    res.json(job.applicants);
  } catch (error) {
    throw new Error(error);
  }
};

// Edit job function is not implemented yet
export const editJob = async () => {};

export const deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.jobId);
  } catch (error) {
    throw new Error(error);
  }
};
