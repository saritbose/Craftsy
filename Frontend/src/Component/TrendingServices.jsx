import React from "react";

const TrendingServices = ({ Service, image }) => {
  return (
    <div className="bg-orange-500 shadow-md rounded-md w-32 flex-shrink-0 text-white">
      <div className="p-1 h-45 items-start justify-between flex flex-col">
        <h2 className="text-xl font-semibold mb-4">{Service}</h2>
        <div className=" rounded-xl w-full">
          <img src={image} className="rounded-lg w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default TrendingServices;
