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
    const profile = await Profile.findOne({ user: req.user._id }).populate(
      "user"
    );
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    return res.status(200).json(profile);
  } catch (error) {
    return res.status(500).json({
      message: "Profile not found",
    });
  }
};

export const updateProfile = async (req, res) => {
  const { title, aboutMe, rate, experience, skills } = req.body;
  try {
    let profile = await Profile.findOne({ user: req.user._id });
    //create a new profile if it doesn't exist
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile doesn't exist. Please complete initial setup first",
      });
    }
    //update the profile
    if (title !== undefined) profile.title = title;
    if (rate !== undefined) profile.expectedRate = Number(rate);
    if (aboutMe !== undefined) profile.aboutMe = aboutMe;
    if (experience !== undefined) profile.experience = experience;
    if (skills !== undefined) profile.skills = skills;
    await profile.save();
    return res.status(200).json(profile);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to update profile" });
  }
};

export const updateProfileColor = async (req, res) => {
  const { bgColor } = req.body;
  try {
    let profile = await Profile.findOne({ user: req.user._id });
    if (!profile) {
      //create a new profile
      profile = new Profile({
        profileBg: bgColor,
        user: req.user._id,
      });
      await profile.save();
      await User.findByIdAndUpdate(req.user._id, { profile: profile._id });
    } else {
      profile.profileBg = bgColor;
      await profile.save();
    }
    return res.status(200).json(profile);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

export const getUserProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await Profile.findOne({ user: id }).populate("user");
    if (!profile) {
      return res
        .status(404)
        .json({ success: false, message: "Profile not found" });
    }
    return res.status(200).json(profile);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error while fetching profile" });
  }
};
