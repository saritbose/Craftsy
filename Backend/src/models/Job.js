import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    pricing: {
      structure: {
        type: String,
        enum: ["fixed", "hourly", "monthly", "yearly"],
        required: true,
      },
      budget: {
        type: Number,
        required: true,
      },
    },
    experience: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    applicants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    selected: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    rejected: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);
export default Job; // job details model
