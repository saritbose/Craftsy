import React, { useEffect, useState } from "react";
import axios from "axios";
import YourAppliedJobs from "./Components/YourAppliedJobs";

const YourApplications = ({ searchText }) => {
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const user = await axios.get(`${backend_url}/api/freelancer/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(user.data);
        const job = await axios.get(`${backend_url}/api/freelancer/get-jobs`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJobs(job.data);
      } catch (error) {
        console.error("Failed to fetch data: ", error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className=" mt-15 lg:mt-0 flex-1 z-10 lg:absolute top-10 left-56 right-71 scrollbar-hide text-wrap">
      <p className="font-medium my-5 text-xl">All jobs application</p>
      {jobs
        .filter(
          (job) =>
            job.applicants.includes(user._id) ||
            job.selected.includes(user._id) ||
            job.rejected.includes(user._id)
        )
        .filter((job) =>
          job.title.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((job) => (
          <YourAppliedJobs
            key={job._id}
            jobId={job._id}
            userId={user._id}
            date={job.createdAt}
            skills={job.skills}
            title={job.title}
            description={job.description}
            structure={job.pricing.structure}
            budget={job.pricing.budget}
            experience={job.experience}
            location={job.location}
            applicants={job.applicants}
            selected={job.selected}
            rejected={job.rejected}
          />
        ))}
    </div>
  );
};

export default YourApplications;
