import { Button } from "@/components/ui/button";
import axios from "axios";
import { CircleChevronLeft } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const JobDetails = () => {
  const token = localStorage.getItem("token");
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
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
    <div className="bg-orange-400 min-h-full border-2 border-orange-400">
      <div className="border-1 border-orange-500 shadow-lg m-6 p-3 min-h-screen h-auto font-mono bg-orange-400">
        <div className="flex items-center justify-between">
          <div className="text-4xl font-medium text-white">{title}</div>
          <CircleChevronLeft
            onClick={() => navigate(-1)}
            className="w-4 text-orange-700 hover:text-white"
          />
        </div>
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
              Applicants:
              <span className="text-white">{applicants.length}</span>
            </li>
          </ul>
        </div>
        <Button
          onClick={handleApply}
          className="mt-4 bg-orange-500 text-black font-extrabold hover:bg-orange-600 hover:text-white"
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default JobDetails;
