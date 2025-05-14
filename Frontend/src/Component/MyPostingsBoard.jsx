import React, { useEffect, useState } from "react";
import JobPosts from "./JobPosts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import axios from "axios";

const MyPostingsBoard = ({ filter }) => {
  const [jobs, setJobs] = useState([]);

  const token = localStorage.getItem("token");
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${backend_url}/api/client/get-jobs`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJobs(res.data);
      } catch (error) {
        console.log(error);
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
            job.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map((job) => (
            <JobPosts
              key={job._id}
              title={job.title}
              jobId={job._id}
              applicants={job.applicants}
            />
          ))}
      </div>
    </div>
  );
};

export default MyPostingsBoard;
