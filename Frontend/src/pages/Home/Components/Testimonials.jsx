import React from "react";

const Testimonials = ({ name, title, text }) => {
  return (
    <div className=" border-2 rounded-md shadow-md w-2xs md:min-w-[300px] px-5 pb-3 ">
      <div className="rounded-full bg-blue-900 w-10 h-10 pt-1 text-center text-4xl text-white relative bottom-5">
        ❝
      </div>
      <div className="text-xl">
        <span className="text-yellow-500">★★★★★</span>
      </div>
      <p className="text-neutral-600 my-3">{text}</p>
      <hr className="w-full h-0.5 bg-neutral-400" />
      <p className="font-semibold pl-1 pt-2">{name}</p>
      <p className="text-neutral-600 text-sm pl-1 -mt-1">{title}</p>
    </div>
  );
};

export default Testimonials;
