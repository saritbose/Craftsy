import axios from "axios";
import { MapPin } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Jobs = ({
  jobId,
  date,
  title,
  description,
  structure,
  budget,
  experience,
  skills,
  location,
  applicants,
}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const applied = applicants.length;

  const handleJobDetail = () => {
    navigate(`/freelancer/job/${jobId}`, {
      state: {
        jobId,
        date,
        title,
        description,
        structure,
        budget,
        experience,
        skills,
        location,
        applicants,
      },
    });
  };

  const handleApply = async () => {
    try {
      const res = await axios.post(
        `${backend_url}/api/freelancer/apply-to-job/${jobId}`,
        null,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={handleJobDetail}
      className="pt-5 pb-3 px-4 group hover:bg-neutral-100 hover:shadow-lg"
    >
      <p className="text-neutral-800 text-xs mb-1">{`Posted Date: ${
        date.split("T")[0]
      }`}</p>
      <p className="text-xl font-semibold hover:underline group-hover:text-orange-400">
        {title}
      </p>
      <p className="text-neutral-800 text-xs my-2">
        {`${structure} - ${experience} - Est. Budget: ${budget}`}
      </p>
      <p className="font-light">
        {`${description.slice(0, 50)}...`}
        <span className="text-orange-400 underline">more</span>
      </p>
      <div className="flex gap-2">
        {skills.map((skill, index) => (
          <p
            key={index}
            className="rounded-2xl bg-neutral-200 w-fit px-3 py-0.5 mb-4 my-3 text-neutral-500"
          >
            {skill}
          </p>
        ))}
      </div>
      <p className="flex gap-1 text-neutral-500">
        <MapPin className="w-4 h-5 text-neutral-700" />
        {location}
      </p>
      <p className="text-gray-500 mt-1 mb-4">
        Proposals:
        <span className="text-neutral-500"> {applied} Applicants</span>
      </p>
      <button
        onClick={handleApply}
        className="bg-orange-300 p-1.5 px-3 rounded-3xl hover:text-white hover:bg-orange-400"
      >
        Apply
      </button>
    </div>
  );
};

export default Jobs;
