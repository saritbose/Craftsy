import Profile from "../models/Profile.js";
import User from "../models/User.js";

export const getMyInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user?._id);
    res.json(user);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateMyProfile = async (req, res) => {
  const { title, aboutMe, expectedRate, experience, skills } = req.body;

  let profile = await Profile.findOne({ user: req.user._id });
  //create a new profile if it doesn't exist
  if (!profile) {
    try {
      profile = new Profile({
        title,
        aboutMe,
        expectedRate,
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
    profile.expectedRate = expectedRate;
    profile.experience = experience;
    profile.skills = skills;
  }
  await profile.save();
  await User.findByIdAndUpdate(req.user._id, { profile: profile._id });
  res.json(profile);
};

export const getMyUpdatedInfo = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    res.json(profile);
  } catch (error) {
    res.json({
      message: "Error while fetching profile",
    });
  }
};

export const getUserProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ _id: id }).populate("profile");
    if (!user) {
      return res.json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    return res.json({ message: "Error while fetching user" });
  }
};
