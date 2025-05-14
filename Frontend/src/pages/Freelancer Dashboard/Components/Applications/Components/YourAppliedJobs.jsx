import React from "react";
import { useNavigate } from "react-router-dom";

const YourAppliedJobs = ({
  jobId,
  userId,
  date,
  title,
  description,
  structure,
  budget,
  experience,
  skills,
  location,
  applicants,
  selected,
  rejected,
}) => {
  const navigate = useNavigate();

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

  return (
    <div
      onClick={handleJobDetail}
      className="flex justify-between items-baseline border-1 rounded-md pt-5 pb-1.5 px-4 group hover:bg-neutral-100 hover:shadow-lg"
    >
      <div>
        <p className="text-xl font-semibold group-hover:text-orange-400">
          {title}
        </p>
        <p className="text-neutral-800 text-xs my-2">
          {`${structure} - ${experience} - Est. Budget: ${budget}`}
        </p>
      </div>
      <div>
        {selected.includes(userId)
          ? "Accepted"
          : rejected.includes(userId)
          ? "Rejected"
          : "Pending"}
      </div>
    </div>
  );
};

export default YourAppliedJobs;
