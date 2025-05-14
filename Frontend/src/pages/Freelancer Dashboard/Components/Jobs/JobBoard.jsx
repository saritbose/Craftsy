import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Jobs from "./Components/Jobs";
import axios from "axios";

const JobBoard = ({ searchText }) => {
  const [jobs, setJobs] = useState([]);
  const token = localStorage.getItem("token");
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${backend_url}/api/freelancer/get-jobs`, {
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
    <div className=" mt-15 lg:mt-0 flex-1 z-10 lg:absolute top-10 left-56 right-71 scrollbar-hide text-wrap">
      <p className="font-medium my-5 text-xl">Jobs you might like</p>
      <Tabs defaultValue="bestmatches">
        <TabsList className="bg-white">
          <TabsTrigger value="bestmatches">Best Matches</TabsTrigger>
          <TabsTrigger value="mostrecent">Most Recent</TabsTrigger>
          <TabsTrigger value="savedjobs">Saved Jobs</TabsTrigger>
        </TabsList>
        <TabsContent value="bestmatches">
          <p className="text-gray-600 my-3">
            Browse jobs that match your experience to a client's hiring
            preferences. Ordered by most relevant.
          </p>
          <hr className="w-vw mt-2" />
          <div>
            {/* Jobs */}
            {jobs
              .filter((job) =>
                job.title.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((job) => (
                <Jobs
                  key={job._id}
                  jobId={job._id}
                  date={job.createdAt}
                  skills={job.skills}
                  title={job.title}
                  description={job.description}
                  structure={job.pricing.structure}
                  budget={job.pricing.budget}
                  experience={job.experience}
                  location={job.location}
                  applicants={job.applicants}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="mostrecent">
          <p className="text-gray-600 my-3">
            Browse the most recent jobs that match your skills and profile
            description to the skills clients are looking for.
          </p>
          <hr className="w-1vw mt-2" />
          <div>
            {/* Jobs */}
            {[...jobs]
              .filter((job) =>
                job.title.toLowerCase().includes(searchText.toLowerCase())
              )
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((job) => (
                <Jobs
                  key={job._id}
                  jobId={job._id}
                  date={job.createdAt}
                  skills={job.skills}
                  title={job.title}
                  description={job.description}
                  structure={job.pricing.structure}
                  budget={job.pricing.budget}
                  experience={job.experience}
                  location={job.location}
                  applicants={job.applicants}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="savedjobs" className="text-gray-600 my-3">
          Feature still not available.
        </TabsContent>
      </Tabs>
      <div className="mt-10"></div> {/* For a better view */}
    </div>
  );
};

export default JobBoard;
