import React from "react";

const JobPosts = () => {
  return (
    <div className="border-1 rounded-md pt-5 pb-1.5 px-4 group hover:bg-neutral-100 hover:shadow-lg">
      <p className="text-xl font-semibold group-hover:text-orange-400">
        Job Title
      </p>
      <p className="text-neutral-800 text-xs my-2">
        Open/In Progress/Completed
      </p>
      <p className="text-gray-500 mt-1 mb-1.5">
        Proposals:<span className="text-neutral-500"> (Num) Applicants</span>
      </p>
      <div className="hidden text-xs w-[95%] ml-5 group-hover:flex justify-between font-light">
        <div className="flex justify-between gap-2">
          <div className="text-orange-300 hover:text-orange-500">
            View Applicants
          </div>
          <div className="text-orange-300 hover:text-orange-500">
            Hire Freelancer
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <div className="text-orange-300 hover:text-orange-500">Edit</div>
          <div className="text-orange-300 hover:text-orange-500">Delete</div>
        </div>
      </div>
    </div>
  );
};

export default JobPosts;
