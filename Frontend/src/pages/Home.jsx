import Cards from "@/Component/Cards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlignJustify, Box, Search } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Header */}
      <div className="flex justify-between sm:justify-around m-2">
        <div className="flex gap-1 ">
          <Box />
          <div className="hidden sm:block">Craftsy</div>
        </div>
        <div className="hidden sm:flex gap-8">
          <div>How It Works</div>
          <div>Categories</div>
          <div>Find a Designer</div>
          <div>Studio</div>
        </div>
        <div className="sm:flex gap-6">
          <div className="hidden sm:block">Log in</div>
          <div className="hidden sm:block">Sign up</div>
          <AlignJustify className="sm:hidden" />
        </div>
      </div>

      {/* Start Point */}
      <div className="flex flex-col sm:flex-row">
        <div className=" w-full sm:w-1/2 px-6 py-10 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            World Class <span className="text-blue-600">Design At</span> Your
            Service
          </h1>
          <p className="text-gray-600 mb-6">
            Find great talent. Build your business. Take your career to the next
            level.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="   Logo,Website,Branding..."
              className="hidden sm:block rounded-4xl border border-gray-300 w-full sm:w-auto flex-1"
            />
            <button className="bg-orange-500 text-white px-6 py-3 rounded-4xl">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full sm:w-[55%] sm:h-2/4">
          <img src="/Picccky.png" className="w-full h-full mx-3" />
        </div>
      </div>

      {/* Advantages */}
      <div className="bg-neutral-100 my-10">
        <div className="text-center text-2xl py-10">
          It's Easy To Get Work Done On Creative Peoples
        </div>
        <div className="flex flex-col sm:flex-row justify-around">
          <Cards
            title={"Post a Job"}
            content={
              "Create your free job posting and start receiving Quotes within hours."
            }
            icon={Search}
          />
          <Cards
            title={"Hire Freelancers"}
            content={
              "Compare the Quotes you receive and hire the best freelance professionals for the job."
            }
            icon={Search}
          />
          <Cards
            title={"Get Work Done"}
            content={
              "Decide on how and when payments will be made and use WorkRooms to collaborate."
            }
            icon={Search}
          />
          <Cards
            title={"Pay Safely"}
            content={
              "Choose from multiple payment methods with Stripe payment protection."
            }
            icon={Search}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
