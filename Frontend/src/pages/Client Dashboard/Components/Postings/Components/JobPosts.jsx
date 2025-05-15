import axios from "axios";
import { Check, Plus } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const JobPosts = ({ title, jobId, applicants, onDelete }) => {
  const [openApplicants, setOpenApplicants] = useState(false);
  const [viewApplicants, setViewApplicants] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const handleDeleteJob = async () => {
    onDelete(jobId);
  };

  const handleSelectedApplicant = async (applicantId, jobId) => {
    try {
      await axios.put(
        `${backend_url}/api/client/accept-applicant/${jobId}/${applicantId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Freelancer accepted.");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      toast.error("Something went wrong. Freelancer not accepted!");
    }
  };

  const handleDeleteApplicant = async (applicantId, jobId) => {
    try {
      await axios.put(
        `${backend_url}/api/client/del-applicant/${jobId}/${applicantId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Freelancer rejected.");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      toast.error("Something went wrong. Freelancer not rejected!");
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
      if (res.data === "No applicants found") {
        setViewApplicants([]);
        return;
      }
      setViewApplicants(res.data);
      setOpenApplicants(!openApplicants);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border-1 rounded-md pt-5 pb-1.5 px-4 group hover:bg-neutral-100 hover:shadow-lg">
      <p className="text-xl font-semibold group-hover:text-orange-400">
        {title}
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
                {Array.isArray(viewApplicants) && viewApplicants.length > 0 ? (
                  viewApplicants.map((applicant) => (
                    <div
                      onClick={() => setOpenApplicants(false)}
                      key={applicant._id}
                      className="flex justify-between border-2 my-1 px-1 shadow-lg border-neutral-50 text-sm overflow-y-auto
                    text-orange-400 overflow-x-hidden scrollbar-hide"
                    >
                      <Link
                        to={`/profile/${applicant._id}`}
                        className="hover:text-orange-600"
                      >
                        {applicant.name}
                      </Link>
                      <div className="flex gap-1">
                        <Check
                          onClick={() =>
                            handleSelectedApplicant(applicant._id, jobId)
                          }
                          className="w-4 text-green-500 hover:text-green-700 cursor-pointer"
                        />
                        <Plus
                          onClick={() =>
                            handleDeleteApplicant(applicant._id, jobId)
                          }
                          className="w-4 rotate-45 text-red-500 hover:text-red-700 cursor-pointer"
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex justify-center items-center text-center h-full w-full text-sm text-gray-500">
                    No applications yet.
                  </div>
                )}
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
            onClick={() => navigate(`/client/edit-job/${jobId}`)}
            className="text-orange-300 hover:text-orange-500 cursor-pointer"
          >
            Edit
          </div>
          <div
            onClick={handleDeleteJob}
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
