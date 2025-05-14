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

export const getJob = async (req, res) => {
  const id = req.params.id;
  try {
    const job = await Job.findById(id);
    res.json(job);
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

export const editJob = async (req, res) => {
  const id = req.params.id;
  const updateData = {
    ...req.body,
    pricing: {
      structure: req.body.structure,
      budget: req.body.budget,
    },
    experience: req.body.level,
  };
  delete updateData.structure;
  delete updateData.budget;
  delete updateData.level;
  try {
    const updatedJob = await Job.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedJob) {
      return res.json({ message: "Job not found" });
    }
    res.json(updatedJob);
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteJob = async (req, res) => {
  const jobId = req.params.jobId;
  try {
    await Job.findByIdAndDelete(jobId);
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    throw new Error(error);
  }
};

export const acceptApplicant = async (req, res) => {
  try {
    const { jobId, applicantId } = req.params;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.json({ message: "Job not found" });
    }
    if (job.applicants.includes(applicantId)) {
      await Job.findByIdAndUpdate(jobId, {
        $pull: { applicants: applicantId },
        $push: { selected: applicantId },
      });
      return res.json({ message: "Applicant accepted successfully" });
    } else {
      return res.json({ message: "Applicant not found" });
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteApplicant = async (req, res) => {
  try {
    const { jobId, applicantId } = req.params;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.json({ message: "Job not found" });
    }
    if (job.applicants.includes(applicantId)) {
      await Job.findByIdAndUpdate(jobId, {
        $pull: { applicants: applicantId },
        $push: { rejected: applicantId },
      });
      return res.json({ message: "Applicant deleted successfully" });
    } else {
      return res.json({ message: "Applicant not found" });
    }
  } catch (error) {
    throw new Error(error);
  }
};
