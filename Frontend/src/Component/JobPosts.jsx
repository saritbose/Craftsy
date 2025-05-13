import axios from "axios";
import { Check, Plus } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const JobPosts = ({ title, jobId, applicants }) => {
  const [openApplicants, setOpenApplicants] = useState(false);
  const [viewApplicants, setViewApplicants] = useState([]);
  const token = localStorage.getItem("token");
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const handleEdit = async () => {};
  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `${backend_url}/api/client/del-job/${jobId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleApplicants = async () => {
    try {
      const res = await axios.get(
        `${backend_url}/api/client/get-applicants/${jobId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setViewApplicants(res.data);
      setOpenApplicants(!openApplicants);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-1 rounded-md pt-5 pb-1.5 px-4 group hover:bg-neutral-100 hover:shadow-lg">
      <p className="text-xl font-semibold group-hover:text-orange-400">
        {title}
      </p>
      <p className="text-neutral-800 text-xs my-2">
        Open/In Progress/Completed
      </p>
      <p className="text-gray-500 mt-1 mb-1.5">
        Proposals:
        <span className="text-neutral-500">
          {" "}
          {applicants.length} Applicants
        </span>
      </p>
      <div className="hidden text-xs w-[95%] ml-5 group-hover:flex justify-between font-light">
        <div className="flex justify-between gap-2">
          <div className="group relative">
            <button
              value={openApplicants}
              onClick={handleApplicants}
              className={`hover:text-orange-500 cursor-pointer ${
                openApplicants ? "text-orange-500" : "text-orange-300"
              }`}
            >
              View Applicants
            </button>
            {openApplicants ? (
              <div className="absolute -bottom-2 left-45 w-32 h-34 bg-white border-0 rounded-md shadow-lg p-2">
                {viewApplicants.map((applicant) => (
                  <div
                    onClick={() => setOpenApplicants(false)}
                    key={applicant._id}
                    className="flex justify-between py-0.5 text-sm overflow-y-auto
                    text-orange-400 overflow-x-hidden scrollbar-hide"
                  >
                    <Link
                      to={`/profile/${applicant._id}`}
                      className="hover:text-orange-600"
                    >
                      {/*  // Add the link to the applicant's profile */}
                      {applicant.name}
                    </Link>
                    <div className="gap-1 flex">
                      <Check className="w-4 hover:text-orange-600" />
                      <Plus className="w-4 rotate-45 hover:text-orange-600" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
          <Link to={"/hire"} className="text-orange-300 hover:text-orange-500">
            Hire Freelancer
          </Link>
        </div>
        <div className="flex justify-between gap-2">
          <div
            onClick={handleEdit}
            className="text-orange-300 hover:text-orange-500 cursor-pointer"
          >
            Edit
          </div>
          <div
            onClick={handleDelete}
            className="text-orange-300 hover:text-orange-500 cursor-pointer"
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPosts;
