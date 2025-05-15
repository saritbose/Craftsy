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
        budget: Number(budget),
      },
      experience: level,
      skills: skills,
      location: location,
    });
    await newJob.save();
    return res
      .status(201)
      .json({ success: true, message: "Job successfully added" });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Job not added" });
  }
};

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

export const getJob = async (req, res) => {
  const id = req.params.id;
  try {
    const job = await Job.findById(id);
    return res.status(200).json(job);
  } catch (error) {
    return res.status(404).json({ success: false, message: "Job not found" });
  }
};

export const getApplicants = async (req, res) => {
  const jobId = req.params.jobId;
  try {
    const job = await Job.findById(jobId).populate("applicants");
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    if (job.applicants.length === 0) {
      return res.status(404).json({ message: "No applicants found" });
    }
    return res.status(200).json(job.applicants);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error while fetching applicants" });
  }
};

export const editJob = async (req, res) => {
  const id = req.params.id;
  const updateData = {
    ...req.body,
    pricing: {
      structure: req.body.structure,
      budget: Number(req.body.budget),
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
      return res.status(404).json({ message: "Job not found" });
    }
    return res.status(200).json(updatedJob);
  } catch (error) {
    return res.status(400).json({ success: false, message: "Job not edited" });
  }
};

export const deleteJob = async (req, res) => {
  const jobId = req.params.jobId;
  try {
    await Job.findByIdAndDelete(jobId);
    return res.status(204).json({ message: "Job deleted successfully" });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Job not deleted" });
  }
};

export const acceptApplicant = async (req, res) => {
  try {
    const { jobId, applicantId } = req.params;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    if (job.applicants.includes(applicantId)) {
      await Job.findByIdAndUpdate(jobId, {
        $pull: { applicants: applicantId },
        $push: { selected: applicantId },
      });
      return res
        .status(200)
        .json({ message: "Applicant accepted successfully" });
    } else {
      return res.status(404).json({ message: "Applicant not found" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Applicant not accepted" });
  }
};

export const deleteApplicant = async (req, res) => {
  try {
    const { jobId, applicantId } = req.params;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    if (job.applicants.includes(applicantId)) {
      await Job.findByIdAndUpdate(jobId, {
        $pull: { applicants: applicantId },
        $push: { rejected: applicantId },
      });
      return res
        .status(200)
        .json({ message: "Applicant deleted successfully" });
    } else {
      return res.status(404).json({ message: "Applicant not found" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Applicant not deleted" });
  }
};
