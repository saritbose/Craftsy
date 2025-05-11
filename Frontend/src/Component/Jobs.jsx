import { MapPin } from "lucide-react";
import React from "react";

const Jobs = ({
  date,
  title,
  description,
  structure,
  budget,
  experience,
  skills,
  location,
}) => {
  return (
    <div className="pt-5 pb-3 px-4 group hover:bg-neutral-100 hover:shadow-lg">
      <p className="text-neutral-800 text-xs mb-1">{`Posted Date: ${
        date.split("T")[0]
      }`}</p>
      <p className="text-xl font-semibold hover:underline group-hover:text-orange-400">
        {title}
      </p>
      <p className="text-neutral-800 text-xs my-2">
        {`${structure} - ${experience} - Est. Budget: ${budget}`}
      </p>
      <p className="font-light">
        {`${description.slice(0, 50)}...`}
        <span className="text-orange-400 underline">more</span>
      </p>
      <p className="rounded-2xl bg-neutral-200 w-fit px-3 py-0.5 mb-4 my-3 text-neutral-500">
        Skill
      </p>
      <p className="flex gap-1 text-neutral-500">
        <MapPin className="w-4 h-5 text-neutral-700" />
        {location}
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
