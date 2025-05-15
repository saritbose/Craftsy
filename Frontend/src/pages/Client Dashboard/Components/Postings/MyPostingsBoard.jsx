import React, { useEffect, useState } from "react";
import JobPosts from "./Components/JobPosts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const MyPostingsBoard = ({ searchText }) => {
  const [jobs, setJobs] = useState([]);
  const token = localStorage.getItem("token");
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const handleDelete = async (jobId) => {
    try {
      await axios.delete(`${backend_url}/api/client/del-job/${jobId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Job deleted successfully");
      setJobs((prev) => prev.filter((job) => job._id !== jobId));
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        toast.error("Job not deleted. Try again!");
      } else {
        toast.error("Network error. Please check your connection.");
      }
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${backend_url}/api/client/get-jobs`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJobs(res.data);
      } catch (error) {
        console.error("Failed to fetch jobs: ", error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="mx-2 mt-15 lg:mt-0 flex-1 z-10 lg:absolute top-10 left-43 lg:left-58 right-0 scrollbar-hide">
      <div className="flex justify-between items-baseline">
        <p className="font-medium lg:my-5 text-2xl">My Posted Jobs</p>
        <Button className="rounded-xl hover:bg-orange-400 bg-orange-500 shadow-lg">
          <Link to={"/client/post-job"}>Post a Job</Link>
        </Button>
      </div>
      <div className="my-5">
        {jobs
          .filter((job) =>
            job.title.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((job) => (
            <JobPosts
              key={job._id}
              title={job.title}
              jobId={job._id}
              applicants={job.applicants}
              onDelete={handleDelete}
            />
          ))}
      </div>
    </div>
  );
};

export default MyPostingsBoard;
