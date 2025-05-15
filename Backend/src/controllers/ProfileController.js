import Profile from "../models/Profile.js";
import User from "../models/User.js";

export const userInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user?._id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ success: false, message: "User not found" });
  }
};

export const profileInfo = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    return res.status(200).json(profile);
  } catch (error) {
    return res.status(404).json({
      message: "Profile not found",
    });
  }
};

export const updateProfile = async (req, res) => {
  const { title, aboutMe, rate, experience, skills } = req.body;

  let profile = await Profile.findOne({ user: req.user._id });
  //create a new profile if it doesn't exist
  if (!profile) {
    try {
      profile = new Profile({
        title,
        aboutMe,
        expectedRate: Number(rate),
        experience,
        skills,
        user: req.user._id,
      });
      await profile.save();
      await User.findByIdAndUpdate(req.user._id, { profile: profile._id });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, message: "All fields required" });
    }
  } else {
    //update the profile if it exists
    profile.title = title;
    profile.aboutMe = aboutMe;
    profile.expectedRate = Number(rate);
    profile.experience = experience;
    profile.skills = skills;
    await profile.save();
  }
  return res.status(200).json(profile);
};

export const getUserProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await Profile.findById(id);
    if (!profile) {
      return res
        .status(404)
        .json({ success: false, message: "Profile not found" });
    }
    return res.json(profile);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error while fetching profile" });
  }
};
