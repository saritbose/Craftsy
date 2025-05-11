import React from "react";
import { useLocation } from "react-router-dom";

const JobDetails = () => {
  const details = useLocation();
  const {
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
  } = details.state || {};

  return (
    <div className="bg-orange-400 h-screen overflow-hidden">
      <div className="border-1 border-orange-500 shadow-lg m-6 p-3 h-screen overflow-hidden font-mono bg-orange-400">
        <div className="text-4xl font-medium text-white">{title}</div>
        <div className="text-xs my-1">{date.split("T")[0]}</div>
        <div className="my-5">
          Level: <span className="text-white">{experience}</span>
        </div>
        <div className="text-2xl font-extrabold">Description</div>
        <p className="text-sm">
          <span className="text-white">{description}</span>
        </p>
        <hr className="my-2" />
        <div>
          <p className="text-xl font-extrabold">Details :-</p>
          <ul className="px-5 py-2 list-disc">
            <li>
              Structure: <span className="text-white">{structure}</span>
            </li>
            <li>
              Budget: <span className="text-white">{budget}</span>
            </li>
            <li>
              Skills: <span className="text-white">{skills + ""}</span>
            </li>
            <li>
              Country: <span className="text-white">{location}</span>
            </li>
            <li>
              Applicants:{" "}
              <span className="text-white">{applicants.length}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
