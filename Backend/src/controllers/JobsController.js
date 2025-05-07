import Job from "../models/Job.js";

export const addJob = async (req, res) => {
  const { title, description, structure, budget, level, skills, location } =
    req.body;
  const clientId = req.user._id;
  console.log({
    user: req.user?._id,
    body: req.body,
  });

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
