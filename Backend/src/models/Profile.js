import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    profileBg: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    aboutMe: {
      type: String,
      required: true,
    },
    expectedRate: {
      type: Number,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
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
export default Profile;
