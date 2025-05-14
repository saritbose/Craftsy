import Advantages from "./Components/Advantages";
import Testimonials from "./Components/Testimonials";
import TrendingServices from "./Components/TrendingServices";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlignJustify,
  ArrowRight,
  Box,
  Briefcase,
  CheckCircle,
  Copyright,
  Laptop2,
  ThumbsUp,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <div className="flex justify-between m-2">
        <div className="flex gap-1 p-2">
          <Box />
          <Link to={"/"} className="hidden sm:block">
            Craftsy
          </Link>
        </div>
        <div className="hidden md:flex gap-8 p-2">
          <div>How It Works</div>
          <div>Categories</div>
          <div>Find a Designer</div>
          <div>Studio</div>
        </div>
        <div className="sm:flex gap-6 relative">
          <Link
            to={"/login"}
            className="hidden sm:block rounded-4xl p-2 hover:bg-orange-500 hover:text-white"
          >
            Log in
          </Link>
          <Link
            to={"/register"}
            className="hidden sm:block rounded-4xl p-2 hover:bg-orange-500 hover:text-white"
          >
            Sign up
          </Link>
          <div onClick={() => setNav(!nav)}>
            {nav === true ? (
              <>
                <X className="sm:hidden m-2" />
                <div className="fixed top-14 right-0 bg-white w-[50%] border-2 shadow-md">
                  <div className="m-5">Find talent</div>
                  <div className="m-5">Find Work</div>
                  <div className="m-5">Why Craftsy</div>
                  <div className="m-5">What's new</div>
                  <hr className="w-full bg-neutral-400 " />
                  <div className="my-5 mx-3 flex flex-col gap-3">
                    <Link
                      to={"/login"}
                      className="hover:bg-orange-400 hover:text-white text-center p-2 rounded-3xl w-fit"
                    >
                      Log in
                    </Link>
                    <Link
                      to={"/register"}
                      className="hover:bg-orange-400 hover:text-white text-center p-2 rounded-3xl w-fit"
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <AlignJustify className="sm:hidden m-2" />
            )}
          </div>
        </div>
      </div>
      <hr className="w-[92%] h-0 bg-neutral-400 translate-x-8" />

      {/* Start Point */}
      <div className="flex flex-col sm:flex-row">
        <div className=" w-full sm:w-1/2 px-6 py-10 lg:-translate-y-25 flex flex-col justify-center">
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
              placeholder="Logo,Website,Branding..."
              className="hidden sm:block rounded-4xl border border-gray-300 w-full sm:w-auto flex-1 pl-5"
            />
            <Link
              to={"/register"}
              className="bg-orange-500 text-white text-center px-6 py-3 rounded-4xl"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-[55%] sm:h-2/4">
          <img src="/Picccky.png" className="w-full h-full px-5 pt-2" />
        </div>
      </div>

      {/* Advantages */}
      <div className="bg-neutral-100 my-10 pb-10">
        <div className="text-center text-3xl py-10 font-semibold">
          It's Easy To Get Work Done On Creative Peoples
        </div>
        <div className="flex flex-1/2 flex-col md:flex-row mx-5 md:flex-wrap items-center justify-center  gap-10">
          <Advantages
            title={"Post a Job"}
            content={
              "Create your free job posting and start receiving Quotes within hours."
            }
            icon={Briefcase}
          />
          <Advantages
            title={"Hire Freelancers"}
            content={
              "Compare the Quotes you receive and hire the best freelance professionals for the job."
            }
            icon={Laptop2}
          />
          <Advantages
            title={"Get Work Done"}
            content={
              "Decide on how and when payments will be made and use WorkRooms to collaborate."
            }
            icon={ThumbsUp}
          />
          <Advantages
            title={"Pay Safely"}
            content={
              "Choose from multiple payment methods with Stripe payment protection."
            }
            icon={CheckCircle}
          />
        </div>
      </div>

      {/* Call to action */}
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-[55%] sm:h-2/4">
          <img
            src="/Picccky2.png"
            className="w-full h-full px-5 sm:translate-y-5"
          />
        </div>
        <div className=" w-full sm:w-1/2 px-6 py-10 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-5xl font-semibold mb-4">
            Two Ways To Get Design
          </h1>
          <p className="text-gray-900 mb-6">
            Our tried-and-true creative process makes design magic. With our
            global community that loves to collaborate, we'll turn your great
            ideas.
          </p>
          <div className="flex flex-col">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex items-center">
                    <div className="rounded-full w-9 h-10 p-2 font-bold text-center bg-orange-100 text-orange-700">
                      1
                    </div>
                    <div className="ml-3 font-bold">Work Directly</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="ml-12">
                  Invite our entire creative community to participate in your
                  project Designers submit ideas and you pick your favourite.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="flex items-center">
                    <div className="rounded-full w-9 h-10 p-2 font-bold text-center bg-orange-100 text-orange-700">
                      2
                    </div>
                    <div className="ml-3 font-bold">Start a Contest</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="ml-12">
                  Invite our entire creative community to participate in your
                  project Designers submit ideas and you pick your favourite.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex mt-5">
              <Link
                to={"/register"}
                className="bg-orange-500 text-white px-6 py-3 rounded-4xl"
              >
                Get Started
              </Link>
              <div className=" flex gap-1 px-6 py-3 hover:underline">
                How it Works
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="my-10 pb-10">
        <div className="text-center text-3xl py-10 font-semibold">
          Trending Professional Services
        </div>
        <div className="flex overflow-x-auto scrollbar-hide gap-5 mx-5">
          <TrendingServices Service={"Website Development"} image={"WD.png"} />
          <TrendingServices Service={"Video Editing"} image={"/VE.png"} />
          <TrendingServices
            Service={"Software Development"}
            image={"/SD.png"}
          />
          <TrendingServices Service={"SEO"} image={"/SEO.png"} />
          <TrendingServices Service={"UGC Videos"} image={"/UGC.png"} />
          <TrendingServices Service={"AI Development"} image={"/AI.png"} />
          <TrendingServices
            Service={"Social Media Marketing"}
            image={"/SMM.png"}
          />
        </div>
      </div>

      {/* Reviews */}
      <div className="my-10 pb-10">
        <div className="text-center text-3xl py-10 font-semibold">
          What Our Happy User Says
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap mx-5 gap-10">
          <Testimonials />
          <Testimonials />
          <Testimonials />
          <Testimonials />
          <Testimonials />
          <Testimonials />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black">
        <div className="flex text-center justify-evenly gap-10 py-10 px-10 text-white text-xs">
          <div className="text-left">
            <div className="mb-7 text-neutral-400 hover:underline">Company</div>
            <div className="mb-3 hover:underline">About</div>
            <div className="mb-3 hover:underline">Contact</div>
            <div className="mb-3 hover:underline">Careers</div>
          </div>
          <div className="text-left">
            <div className="mb-7 text-neutral-400 hover:underline">
              Design Service
            </div>
            <div className="mb-3 hover:underline">1 to 1 Projects</div>
            <div className="mb-3 hover:underline">Any Hire</div>
            <div className="mb-3 hover:underline">Inspiration</div>
          </div>
          <div className="text-left">
            <div className="mb-7 text-neutral-400 hover:underline">
              Freelancer
            </div>
            <div className="mb-3 hover:underline">Categories</div>
            <div className="mb-3 hover:underline">Projects</div>
            <div className="mb-3 hover:underline">Contests</div>
          </div>
          <div className="text-left">
            <div className="mb-7 text-neutral-400 hover:underline">
              Resources
            </div>
            <div className="mb-3 hover:underline">Help & Support</div>
            <div className="mb-3 hover:underline">Success stories</div>
            <div className="mb-3 hover:underline">Affiliate programme</div>
          </div>
        </div>
        <hr className="w-[90%] md:w-[94%] h-0 bg-neutral-400 translate-x-7" />
        <div className="text-white flex justify-between py-3 px-7 pb-5">
          <div className="flex text-xs text-neutral-400">
            <Copyright className=" h-3 translate-y-1" />
            <p>2025-2025 Craftsy® Global Inc.</p>
          </div>
          <div className="hidden sm:flex gap-5 text-xs">
            <div className="hover:underline">Terms of Service</div>
            <div className="hover:underline">Privacy Policy</div>
            <div className="hover:underline">Accessibility</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
