import { MapPin } from "lucide-react";
import React from "react";

const Jobs = () => {
  return (
    <div className="pt-5 pb-3 px-4 group hover:bg-neutral-100 hover:shadow-lg">
      <p className="text-neutral-800 text-xs mb-1">Posted Date</p>
      <p className="text-xl font-semibold hover:underline group-hover:text-orange-400">
        Job Title
      </p>
      <p className="text-neutral-800 text-xs my-2">
        Price structure - Level - Est. Budget: $
      </p>
      <p className="font-light">
        Short job description...
        <span className="text-orange-400 underline">more</span>
      </p>
      <p className="rounded-2xl bg-neutral-200 w-fit px-3 py-0.5 mb-4 my-3 text-neutral-500">
        Skill
      </p>
      <p className="flex gap-1 text-neutral-500">
        <MapPin className="w-4 h-5 text-neutral-700" />
        Country
      </p>
      <p className="text-gray-500 mt-1 mb-4">
        Proposals:<span className="text-neutral-500"> Applicants</span>
      </p>
      <button className="bg-orange-300 p-1.5 px-3 rounded-3xl hover:text-white hover:bg-orange-400">
        Apply
      </button>
    </div>
  );
};

export default Jobs;
