import Profile from "../models/Profile.js";
import User from "../models/User.js";

export const userInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user?._id);
    res.json(user);
  } catch (error) {
    throw new Error(error);
  }
};

export const profileInfo = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    res.json(profile);
  } catch (error) {
    res.json({
      message: "Error while fetching profile",
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
        expectedRate: rate,
        experience,
        skills,
        user: req.user._id,
      });
    } catch (error) {
      console.log(error);
    }
  }
  //update the profile if it exists
  else {
    profile.title = title;
    profile.aboutMe = aboutMe;
    profile.expectedRate = rate;
    profile.experience = experience;
    profile.skills = skills;
  }
  await profile.save();
  await User.findByIdAndUpdate(req.user._id, { profile: profile._id });
  res.json(profile);
};

export const getUserProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await Profile.findById(id);
    if (!profile) {
      return res.json({ message: "Profile not found" });
    }
    res.json(profile);
  } catch (error) {
    return res.json({ message: "Error while fetching user" });
  }
};
