import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    profileBg: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    aboutMe: {
      type: String,
    },
    expectedRate: {
      type: Number,
    },
    experience: {
      type: String,
    },
    skills: {
      type: [String],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);
export default Profile; // profile model
